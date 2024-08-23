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
  Center,
  Button,
  Loader,
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
  IconChevronLeft,
  IconFlask,
  IconHistory,
  IconMenu2,
  IconMessage2,
  IconMessageCircle,
  IconPlane,
  IconPlus,
  IconSend,
  IconWriting,
} from "@tabler/icons-react";
import { ChatThread } from "./ChatThread";
import { ChatList } from "./ChatList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { listThread } from "@/requests/list-thread";
import { useRouter } from "next/router";
import { createThread } from "@/requests/create-thread";
import { VectorDbMasker } from "./VectoDbMasker";
export function ChatWrapper(props: Props) {
  const router = useRouter();
  const { id } = router.query;
  // const [tabValue, setTabValue] = useState("history");
  const [threadId, setThreadId] = useState("");

  const { isPending: createThreadIsPending, mutateAsync: createThreadMutate } =
    useMutation({
      mutationFn: createThread,
      mutationKey: ["create-thread"],
      onSuccess: async (data) => {
        setThreadId(data?.id as string);
      },
    });

  const handleCreateThread = async (mode: "chat" | "practice") => {
    await createThreadMutate({
      videoId: id as string,
      mode,
      title: "",
    });
  };

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
      <VectorDbMasker onCloseChat={props.onCloseChat}>
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
                  onClick={() => {
                    handleCreateThread("chat");
                  }}
                >
                  New Chat
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconBolt size={16} />}
                  onClick={() => {
                    handleCreateThread("practice");
                  }}
                >
                  New Practice
                </Menu.Item>
                <Menu.Item
                  leftSection={<IconHistory size={16} />}
                  onClick={() => {
                    setThreadId("");
                  }}
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

        <Tabs
          style={{ flex: 1, display: "flex", alignItems: "stretch" }}
          h="100%"
          w="100%"
          value={(threadId as string) ? "chat" : "history"}
          p={0}
          styles={{
            panel: {
              paddingBottom: 0,
              display: "flex",
              flexDirection: "column",
            },
          }}
          keepMounted={false}
        >
          <Tabs.Panel value="chat" h="100%" flex={1} p={0}>
            <ChatThread
              threadId={threadId as string}
              loading={createThreadIsPending}
            />
          </Tabs.Panel>
          <Tabs.Panel value="history" flex={1}>
            {createThreadIsPending ? (
              <Center w="100%" h="100%">
                <Loader color="gray" />
              </Center>
            ) : (
              <ChatList
                onSelectChat={(chat) => {
                  setThreadId(chat.thread_id);
                }}
              />
            )}
          </Tabs.Panel>
        </Tabs>
      </VectorDbMasker>
    </Paper>
  );
}
