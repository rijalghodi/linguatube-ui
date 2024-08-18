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
  CloseButton,
  Tooltip,
} from "@mantine/core";
import React from "react";
type Props = {
  onCloseChat?: () => void;
};
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  IconArrowUp,
  IconMessageCircle,
  IconPlane,
  IconSend,
} from "@tabler/icons-react";
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
      message:
        "Hello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. HeloHello. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo. Helo.",
      sender: "user",
    },
  ];
  return (
    <Card
      withBorder
      shadow="xl"
      radius="md"
      p="sm"
      miw={300}
      maw={600}
      w="100%"
      styles={{
        root: {
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        },
      }}
    >
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Group gap={4}>
            <Image
              src={logo}
              alt="logo"
              width={28}
              height={28}
              objectFit="cover"
            />

            <Text fz="lg" fw={600}>
              Chat Assistant
            </Text>
          </Group>
          <Group>
            <Switch label="Practice Mode" size="sm" />
            <Tooltip label="Close chat" withArrow>
              <CloseButton size="md" onClick={props.onCloseChat} />
            </Tooltip>
          </Group>
        </Group>
      </Card.Section>
      <Card.Section withBorder py="xs">
        <ScrollArea h={500} px="md" scrollbarSize={10}>
          <Stack gap={8}>
            {chats.map((chat) => (
              <Paper
                bg={chat.sender === "user" ? "gray.2" : "white"}
                py={8}
                px={12}
                withBorder
                shadow="none"
                maw={400}
                w="max-content"
                style={{
                  alignSelf: chat.sender === "user" ? "flex-end" : "flex-start",
                }}
                fz="sm"
              >
                <Text>{chat.message}</Text>
              </Paper>
            ))}
          </Stack>
        </ScrollArea>
      </Card.Section>
      <Card.Section withBorder inheritPadding pb="md" pt="md">
        <TextInput
          radius="sm"
          size="md"
          variant="filled"
          type="text"
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
