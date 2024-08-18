import { Modal, ModalProps, Select, Stack } from "@mantine/core";
import React from "react";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";
import { Button, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { VocabularyBook } from "./VocabularyBook";

export function VocabularyModal({
  innerProps,
}: ContextModalProps<{ modalBody?: string }>) {
  return (
    <Stack>
      {innerProps.modalBody && <Text>{innerProps.modalBody}</Text>}
      <VocabularyBook />
    </Stack>
  );
}
