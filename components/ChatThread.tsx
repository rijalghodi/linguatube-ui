import {
  ActionIcon,
  Box,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import React from "react";
type Props = {
  chats: {
    sender: "human" | "ai";
    message: string;
  }[];
};
export function ChatThread(props: Props) {
  return (
    <Stack gap={0} justify="flex-start" w="100%"  pos="relative">
      <ScrollArea
        h={{
          base: "calc(100vh -  60px)",
          sm: "calc(100vh -  60px - 100px)",
        }}
        scrollbarSize={6}
      >
        <Stack gap={8} py="sm" px="md" pb={220}>
          {props.chats.map((chat, i) => (
            <Paper
              key={i}
              bg={
                chat.sender === "human"
                  ? "var(--mantine-color-default-border)"
                  : undefined
              }
              py={8}
              px={12}
              withBorder
              shadow="none"
              maw={400}
              w="max-content"
              style={{
                alignSelf: chat.sender === "human" ? "flex-end" : "flex-start",
              }}
              fz="sm"
            >
              <Text>{chat.message}</Text>
            </Paper>
          ))}
        </Stack>
      </ScrollArea>

      <Paper
        py="md"
        px="sm"
        shadow="sm"
        pos="absolute"
        bg="var(--mantine-color-body)"
        bottom={0}
        left={0}
        right={0}
        style={{
          borderTop: "1px solid var(--mantine-color-default-border)",
        }}
      >
        <Textarea
          radius="sm"
          size="md"
          variant="filled"
          minRows={1}
          maxRows={6}
          autosize
          placeholder="Message assistant..."
          rightSection={
            <ActionIcon size="md" radius="xl" color="gray" variant="subtle">
              <IconSend size={16} />
            </ActionIcon>
          }
          rightSectionWidth={44}
        />
      </Paper>
    </Stack>
  );
}
