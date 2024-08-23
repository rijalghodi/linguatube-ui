import { createThread } from "@/requests/create-thread";
import { listThread } from "@/requests/list-thread";
import {
  Box,
  Button,
  Center,
  Loader,
  NavLink,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconBolt, IconMessage, IconMessage2 } from "@tabler/icons-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

type Chat = {
  thread_id: string;
  title: string;
  mode: string;
};
type Props = {
  onSelectChat: (chat: Chat) => void;
};
export function ChatList(props: Props) {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient();

  const { isPending: listThreadPending, data: threads } = useQuery({
    queryFn: () => listThread({ videoId: id as string }),
    queryKey: ["list-thread", id],
    enabled: !!id,
  });

  const { isPending: createThreadIsPending, mutateAsync: createThreadMutate } =
    useMutation({
      mutationFn: createThread,
      mutationKey: ["create-thread"],
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: ["list-thread", id],
          refetchType: "active",
        });
      },
    });

  const handleCreateThread = async () => {
    await createThreadMutate({
      videoId: id as string,
      mode: "chat",
      title: "",
    });
  };

  if (!threads?.count || threads.count === 0)
    return (
      <Center h="100%" w="100%">
        {createThreadIsPending ? (
          <Loader color="gray" />
        ) : (
          <Box>
            <Text size="lg" ta="center" mb="xl">
              Select chat mode
            </Text>
            <Stack>
              <Button
                leftSection={<IconMessage2 size={16} />}
                variant="default"
                onClick={handleCreateThread}
              >
                Just Chat
              </Button>
              <Button
                leftSection={<IconBolt size={16} />}
                variant="filled"
                color="orange"
              >
                Practice
              </Button>
            </Stack>
          </Box>
        )}
      </Center>
    );

  return (
    <ScrollArea
      h={{
        base: "calc(100vh -  60px)",
        sm: "calc(100vh -  60px - 80px)",
      }}
      scrollbarSize={6}
    >
      <Stack gap={0} align="stretch" px="xs" py="xs">
        {threads.data.map((chat, i) => (
          <NavLink
            py={10}
            key={chat.id}
            label={`Chat ${i + 1} ${chat.title && " : " + chat.title}`}
            component="button"
            leftSection={
              chat.mode === "practice" ? (
                <IconBolt size={16} color="orange" />
              ) : (
                <IconMessage size={16} />
              )
            }
            onClick={() => props.onSelectChat(chat)}
          ></NavLink>
        ))}
      </Stack>
    </ScrollArea>
  );
}
