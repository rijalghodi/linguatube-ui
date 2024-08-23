import logo from "@/public/logo.png";
import { createThread } from "@/requests/create-thread";
import {
  ActionIcon,
  Center,
  Group,
  Loader,
  Menu,
  Paper,
  Tabs,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  IconBolt,
  IconChevronDown,
  IconHistory,
  IconMenu2,
  IconPlus,
} from "@tabler/icons-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatThread } from "./ChatThread";
import { VectorDbMasker } from "./VectoDbMasker";
type Props = {
  onCloseChat?: () => void;
};
export function ChatWrapper(props: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  // const [tabValue, setTabValue] = useState("history");
  const [threadId, setThreadId] = useState("");

  const { isPending: createThreadIsPending, mutateAsync: createThreadMutate } =
    useMutation({
      mutationFn: createThread,
      mutationKey: ["create-thread"],
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["list-thread", id],
        });
      },
    });

  console.log("thread Id", threadId);

  const handleCreateThread = async (mode: "chat" | "practice") => {
    const data = await createThreadMutate({
      videoId: id as string,
      mode,
      title: "",
    });

    if (data?.thread_id) {
      setThreadId(data?.thread_id);
      
    }
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
          // value="chat"
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
                onSuccessCreateChat={(chat) => setThreadId(chat.thread_id)}
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
