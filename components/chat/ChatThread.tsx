import { insertMessage } from "@/requests/insert-message";
import { listThreadMessage } from "@/requests/list-thread-messages";
import Markdown from "markdown-to-jsx";
import {
  ActionIcon,
  Box,
  Center,
  Loader,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Message = {
  role?: string;
  content: string;
};

type Props = {
  threadId: string;
  loading?: boolean;
};
export function ChatThread(props: Props) {
  const { id } = useRouter().query;
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMessages([]);
  }, [props.threadId]);

  const { mutateAsync: insertMessageMutate, isPending: botIsGenerating } =
    useMutation({
      mutationFn: insertMessage,
      mutationKey: ["insert-message", props.threadId],
    });

  // ======== Get last messages ==============================

  const { data: lastMessages, isPending: lastMessagesInPending } = useQuery({
    queryKey: ["thread", props.threadId],
    queryFn: () => listThreadMessage({ threadId: props.threadId }),
    enabled: !!props.threadId,
  });

  console.log(messages);

  useEffect(() => {
    if (lastMessages?.data) {
      setMessages(lastMessages.data);
    }
  }, [lastMessages]);

  // ================= Send message ========================

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "human", content: input };
    setMessages([...messages, userMessage]);

    // Clear input field
    setInput("");

    // Handle streaming response
    await fetchChatGPTResponse(input);
  };

  const fetchChatGPTResponse = async (input: string) => {
    const response = await insertMessageMutate({
      threadId: props.threadId,
      videoId: id as string,
      content: input,
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: response?.content ?? "", role: response?.role ?? "ai" },
    ]);

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/thread/${props.threadId}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ role: "human", content: input }),
    //   }
    // );

    // const botMessage = JSON.stringify(response.body);

    // console.log(botMessage);

    // const reader = response.body?.getReader();
    // const decoder = new TextDecoder("utf-8");
    // let done = false;
    // let botMessage = "";

    // while (!done) {
    //   const { value, done: doneReading } = (await reader?.read()) ?? {};
    //   done = doneReading ?? true;
    //   botMessage += decoder.decode(value, { stream: true });

    //   console.log(botMessage);

    // setMessages((prevMessages) => {
    //   // Remove the last bot message if it's being updated
    //   if (
    //     prevMessages.length > 0 &&
    //     prevMessages[prevMessages.length - 1].role === "bot"
    //   ) {
    //     return [
    //       ...prevMessages.slice(0, -1),
    //       { role: "ai", content: botMessage },
    //     ];
    //   } else {
    //     return [...prevMessages, { role: "ai", content: botMessage }];
    //   }
    // });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      handleSendMessage(); // Call the submit handler
    }
  };

  if (props.loading) {
    return (
      <Center w="100%" h="100%">
        <Loader color="gray" />
      </Center>
    );
  }

  if (lastMessagesInPending) {
    return (
      <Center w="100%" h="100%">
        <Stack align="center">
          <Text fz="sm">Loading messages...</Text>
          <Loader color="gray" />
        </Stack>
      </Center>
    );
  }

  return (
    <Stack
      gap={0}
      justify="flex-start"
      w="100%"
      flex={1}
      pos="relative"
      // bg="red"
    >
      {!lastMessages ||
        !lastMessages.data ||
        (lastMessages.data.length === 0 && (
          <Center w="100%" h="100%">
            <Text fz="lg" ta="center">
              Start chatting!
            </Text>
          </Center>
        ))}
      <ScrollArea
        h={{
          base: "calc(100vh -  60px)",
          sm: "calc(100vh -  60px - 100px)",
        }}
        scrollbarSize={6}
      >
        <Stack gap={8} py="sm" px="md" pb={220}>
          {messages.map((chat, i) =>
            chat.role === "system" ||
            chat.role === "tool" ? null : chat.role === "ai" ? (
              <Paper shadow="none" py={8} px={8}>
                <Markdown>{chat.content}</Markdown>
              </Paper>
            ) : (
              <Paper
                key={i}
                bg={"var(--mantine-color-default-border)"}
                py={8}
                px={12}
                withBorder
                shadow="none"
                style={{
                  alignSelf: "flex-end",
                }}
              >
                <Text>{chat.content}</Text>
              </Paper>
            )
          )}
          {botIsGenerating && (
            <Text c="var(--mantine-color-default-border)">
              Assistant is writing...
            </Text>
          )}
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
          onKeyDown={handleKeyDown}
          rightSection={
            <ActionIcon
              size="md"
              radius="xl"
              color="gray"
              variant="subtle"
              onClick={handleSendMessage}
            >
              <IconSend size={16} />
            </ActionIcon>
          }
          rightSectionWidth={44}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Paper>
    </Stack>
  );
}
