import { Vocab } from "@/types/vocab";
import { Button, Stack, TextInput, Text, Group, Box } from "@mantine/core";
import React, { useEffect, useState } from "react";
type Props = {
  word: string;
  meaning?: string;
  sentence?: string;
  onSuccessSave?: () => void;
};

type WordInfo = {
  meaning: string;
  usage: string;
  definition: string;
  synonim: string;
  examples: string[];
};
export function VocabInfo(props: Props) {
  const [word, setWord] = useState<string>(props.word);
  const [meaning, setMeaning] = useState<string>(props.meaning ?? "");
  const [sentence, setSentence] = useState<string>(props.sentence ?? "");
  const [wordInfo, setWordInfo] = useState<WordInfo | null>(null);

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

  // TODO: get word info
  useEffect(() => {
    setMeaning("Meaning1");
    setWordInfo({
      meaning: "Meaning1",
      usage: "To be used",
      definition: "To be defined",
      examples: ["Hello wordl", "Hola"],
      synonim: "Synonim1",
    });
  }, []);

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
          value={meaning}
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
      <Stack gap={6}>
        <Text fw="bold" fz="md">
          Definition
        </Text>
        <Text fz="md">{wordInfo?.definition ?? "Loading..."}</Text>
        <Text fw="bold" fz="md" mt={6}>
          Synonim
        </Text>
        <Text fz="md">{wordInfo?.synonim ?? "Loading..."}</Text>
        <Text fw="bold" fz="md" mt={6}>
          Usage
        </Text>
        <Text fz="md">{wordInfo?.usage ?? "Loading..."}</Text>
        <Text fw="bold" fz="md" mt={6}>
          Examples
        </Text>
        <Text fz="md">{wordInfo?.examples.join(", ") ?? "Loading..."}</Text>
      </Stack>
    </Stack>
  );
}
