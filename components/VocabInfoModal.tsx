import { Modal, ModalProps, Select, Stack } from "@mantine/core";
import React from "react";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";
import { Button, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { NativeLanguageInput } from "./NativeLanguageInput";
import { VocabInfo } from "./VocabInfo";

export function VocabInfoModal({
  innerProps,
}: ContextModalProps<{ word: string; meaning?: string; sentence?: string }>) {
  return (
    <VocabInfo
      word={innerProps.word}
      meaning={innerProps.meaning}
      sentence={innerProps.sentence}
    />
  );
}
