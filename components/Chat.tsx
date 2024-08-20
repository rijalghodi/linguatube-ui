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
  Menu,
  Textarea,
  Tabs,
} from "@mantine/core";
import React, { useState } from "react";
type Props = {
  onCloseChat?: () => void;
};
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  IconArrowUp,
  IconBolt,
  IconChevronDown,
  IconFlask,
  IconHistory,
  IconMenu2,
  IconMessageCircle,
  IconPlane,
  IconPlus,
  IconSend,
  IconWriting,
} from "@tabler/icons-react";
import { ChatThread } from "./ChatThread";
import { ChatList } from "./ChatList";
export function Chat(props: Props) {
  const [tabValue, setTabValue] = useState("chat");
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
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "Hello",
      sender: "bot",
    },
    {
      message: "Hello",
      sender: "human",
    },
    {
      message: "End",
      sender: "human",
    },
  ];

  const chatList = [
    {
      title: "Chat 1",
      id: "1",
      type: "practice",
    },
    {
      title: "Chat 1",
      id: "2",
      type: "chat",
    },
    {
      title: "Chat 1",
      id: "42",
      type: "practice",
    },
    {
      title: "Chat 1",
      id: "3",
      type: "chat",
    },
  ];
  return (
    <Paper
      withBorder
      shadow="xl"
      radius="md"
      p={0}
      w="100%"
      h="100%"
      styles={{
        root: {
          display: "flex",
          flexDirection: "column",
          gap: 0,
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        },
      }}
    >
      <Group
        justify="space-between"
        px="sm"
        py="sm"
        style={{
          borderBottom: "1px solid var(--mantine-color-default-border)",
        }}
      >
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
        <Group gap="sm">
          <Menu shadow="xl" position="bottom-end">
            <Menu.Target>
              <ActionIcon size="lg" color="gray" variant="subtle">
                <IconMenu2 size={16} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconPlus size={16} />}
                onClick={() => setTabValue("chat")}
              >
                New Chat
              </Menu.Item>
              <Menu.Item
                leftSection={<IconBolt size={16} />}
                onClick={() => setTabValue("practice")}
              >
                New Practice
              </Menu.Item>
              <Menu.Item
                leftSection={<IconHistory size={16} />}
                onClick={() => setTabValue("history")}
              >
                Chat History
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Tooltip label="Close chat" withArrow>
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              onClick={props.onCloseChat}
            >
              <IconChevronDown size={16} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
      <Box
        style={{ flex: 1, display: "flex", alignItems: "stretch" }}
        h="100%"
      >
        <ChatThread chats={chats as any} />
      </Box>

      {/* <Tabs
        styles={{
          root: {
            flex: 1,
          },
        }}
        value={tabValue}
      >
        <Tabs.Panel value="chat" h="100%" flex={1}>
          <ChatThread chats={chats as any} />
        </Tabs.Panel>
        <Tabs.Panel value="practice">
          <ChatThread chats={chats as any} />
        </Tabs.Panel>
        <Tabs.Panel value="history">
          <ChatList
            data={chatList}
            onSelectChat={(chat) => setTabValue("chat")}
          />
        </Tabs.Panel>
      </Tabs> */}
    </Paper>
  );
}
