import { Modal, ModalProps, Select, Stack } from "@mantine/core";
import React from "react";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";
import { Button, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import { NativeLanguageInput } from "./NativeLanguageInput";

export function SettingModal({
  innerProps,
}: ContextModalProps<{ modalBody: string }>) {
  return (
    <Stack>
      {innerProps.modalBody && <Text>{innerProps.modalBody}</Text>}
      <OpenaiApiKeyInput />
      <NativeLanguageInput />
    </Stack>
  );
}
