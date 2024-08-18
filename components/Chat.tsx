import {
  Group,
  Paper,
  Card,
  TextInput,
  Stack,
  Text,
  Switch,
  ActionIcon,
  Box,
  ScrollArea,
} from "@mantine/core";
import React from "react";
type Props = {};
import Image from "next/image";
import logo from "@/public/logo.png";
import { IconArrowUp, IconPlane, IconSend } from "@tabler/icons-react";
export function Chat(props: Props) {
  const chats = [
    {
      message: "Hello",
      sender: "user",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "bot",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "bot",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "bot",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
    {
      message: "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
  ];
  return (
    <Card withBorder shadow="md" radius="md" p="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Group gap={4}>
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              objectFit="cover"
            />
            <Text fz="lg" fw={600}>
              Chat Assistant
            </Text>
          </Group>
          <Switch label="Practice Mode" />
        </Group>
      </Card.Section>
      <Card.Section withBorder py="xs">
        <ScrollArea h={500} px="md" scrollbarSize={10}>
          <Stack gap={8}>
            {chats.map((chat) => (
              <Paper
                bg={chat.sender === "user" ? "dark.4" : "white"}
                c={chat.sender === "user" ? "white" : "dark"}
                py={8}
                px={12}
                withBorder
                shadow="none"
                w="max-content"
                ta="right"
                style={{
                  alignSelf: chat.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                {chat.message}
              </Paper>
            ))}
            <Paper
              py={8}
              px={12}
              withBorder
              shadow="none"
              w="max-content"
              style={{
                alignSelf: "flex-start",
              }}
            >
              Hello
            </Paper>
          </Stack>
        </ScrollArea>
      </Card.Section>
      <Card.Section withBorder inheritPadding pb="sm" pt="md">
        <TextInput
          radius="sm"
          variant="filled"
          placeholder="Message assistant..."
          rightSection={
            <ActionIcon size="md" radius="xl" color="dark" variant="subtle">
              <IconSend size={16} />
            </ActionIcon>
          }
          rightSectionWidth={44}
        />
      </Card.Section>
    </Card>
  );
}
