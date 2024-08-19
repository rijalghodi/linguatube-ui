import { axiosInstance } from "@/requests/axios-instace";
import { invokeWordInfo } from "@/requests/invokeWordInfo";
import { translateWord } from "@/requests/translateWord";
import { Vocab, WordInfo } from "@/types/vocab";
import {
  Button,
  Stack,
  TextInput,
  Text,
  Group,
  Box,
  Loader,
} from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
type Props = {
  word: string;
  meaning?: string;
  sentence?: string;
  onSuccessSave?: () => void;
};

export function VocabInfo(props: Props) {
  const [word, setWord] = useState<string>(props.word);
  const [meaning, setMeaning] = useState<string>(props.meaning ?? "");
  const [sentence, setSentence] = useState<string>(props.sentence ?? "");
  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null);

  // ==== # handle save vocab ====
  const handleSaveVocab = (): void => {
    const prevVocabString = localStorage.getItem("linguatube.vocab");
    const prevVocab = prevVocabString
      ? (JSON.parse(prevVocabString) as Vocab[])
      : ([] as Vocab[]);
    const newVocab = { word: word, meaning: meaning, sentence: sentence };
    const allVocab = [...prevVocab, newVocab];

    localStorage.setItem("linguatube.vocab", JSON.stringify(allVocab));
    props.onSuccessSave?.();
  };

  // ==== # handle search word info ====
  const nativeLanguage = localStorage.getItem("linguatube.nativeLanguage");
  const { isPending: wordInfoIsPending, mutateAsync: wordInfoMutate } =
    useMutation({
      mutationFn: invokeWordInfo,
      mutationKey: ["word-info"],
    });
  const { isPending: translateIsPending, mutateAsync: traslateMutate } =
    useMutation({
      mutationFn: translateWord,
      mutationKey: ["translate"],
    });
  const handleSearchWord = async () => {
    const translation = await traslateMutate({
      word,
      sentence,
      nativeLanguage: nativeLanguage ?? undefined,
    });
    const wordInfo = await wordInfoMutate({ word, sentence });
    if (wordInfo) setWordInfo(wordInfo);
    if (translation) setMeaning(translation);
  };

  useEffect(() => {
    handleSearchWord();
  }, []); // eslint-disable-line

  return (
    <Stack align="stretch" gap="xs">
      <Stack gap={8}>
        <TextInput
          label="Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          size="md"
        />
        <TextInput
          label="Meaning"
          value={translateIsPending ? "....." : meaning}
          readOnly={translateIsPending}
          onChange={(e) => setMeaning(e.target.value)}
          size="md"
        />
        <TextInput
          label="Example"
          value={sentence}
          onChange={(e) => setSentence(e.target.value)}
          size="md"
        />
      </Stack>
      <Group justify="center" w="100%" mt="sm">
        <Button size="md" onClick={handleSaveVocab}>
          Save Vocab
        </Button>
      </Group>
      {wordInfoIsPending ? (
        <Stack h={200} align="center" justify="center">
          <Loader size="md" />
          <Text fz="sm">Loading word info...</Text>
        </Stack>
      ) : (
        <Stack gap={6}>
          <Text fw="bold" fz="md">
            Definition
          </Text>
          <Text fz="md">{wordInfo?.definition}</Text>
          <Text fw="bold" fz="md" mt={6}>
            Synonym
          </Text>
          <Text fz="md">{wordInfo?.synonym}</Text>
          <Text fw="bold" fz="md" mt={6}>
            Usage
          </Text>
          <Text fz="md">{wordInfo?.usage}</Text>
          <Text fw="bold" fz="md" mt={6}>
            Examples
          </Text>
          <Text fz="md">{wordInfo?.example?.join(", ")}</Text>
        </Stack>
      )}
    </Stack>
  );
}
