import { Group, Modal, ModalProps, Select, Stack } from "@mantine/core";
import React from "react";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";
import { Button, Text } from "@mantine/core";
import { ContextModalProps, ModalsProvider } from "@mantine/modals";
import Link from "next/link";

export function AboutModal({
  innerProps,
}: ContextModalProps<{ modalBody: string }>) {
  return (
    <Stack gap={4}>
      {innerProps.modalBody && <Text>{innerProps.modalBody}</Text>}
      <Text fz="sm">Rijal Ghodi</Text>
      <Text fz="sm">rijalghodi10@gmail.com</Text>
      <Group fz="sm">
        <Link href="https://github.com/rijalghodi/linguatube-ui">
          Source Code
        </Link>
        <Link href="https://github.com/rijalghodi/linguatube-ui/issues">
          Issues
        </Link>
        <Link href="https://github.com/rijalghodi/linguatube-ui/issues">
          Contributing
        </Link>
      </Group>
    </Stack>
  );
}
