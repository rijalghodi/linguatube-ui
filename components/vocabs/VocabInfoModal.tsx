import { Modal, ModalProps, Select, Stack } from "@mantine/core";
import React from "react";
import { OpenaiApiKeyInput } from "../settings/OpenaiApiKeyInput";
import { Button, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { NativeLanguageInput } from "../settings/NativeLanguageInput";
import { VocabInfo } from "./VocabInfo";

export function VocabInfoModal({
  innerProps,
  context,
  id,
}: ContextModalProps<{ word: string; meaning?: string; sentence?: string }>) {
  return (
    <VocabInfo
      word={innerProps.word}
      meaning={innerProps.meaning}
      sentence={innerProps.sentence}
      onSuccessSave={() => context.closeContextModal(id)}
    />
  );
}
