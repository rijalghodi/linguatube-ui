import { NavLink, ScrollArea, Stack } from "@mantine/core";
import {
  IconBolt,
  IconFlask,
  IconMessage,
  IconShoe,
} from "@tabler/icons-react";
import React from "react";

type Chat = {
  id: string;
  title: string;
  type: string;
};
type Props = {
  data: Chat[];
  onSelectChat: (chat: Chat) => void;
};
export function ChatList(props: Props) {
  return (
    <ScrollArea flex={1} scrollbarSize={6}>
      <Stack gap={0} align="stretch" px="xs" py="xs">
        {props.data.map((chat) => (
          <NavLink
            py={12}
            key={chat.id}
            label={chat.title}
            component="button"
            leftSection={
              chat.type === "practice" ? (
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
