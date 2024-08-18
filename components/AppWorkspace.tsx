import { ActionIcon, Box, Container, Group, Tooltip } from "@mantine/core";
import React from "react";
import { VideoAndScript } from "./VideoAndScript";
import {
  IconBook2,
  IconCancel,
  IconMessage2,
  IconMessageCircle,
  IconX,
} from "@tabler/icons-react";
import { Chat } from "./Chat";
import { useDisclosure } from "@mantine/hooks";
type Props = {};
export function AppWorkspace(props: Props) {
  const [chatOpened, { open: openChat, close: closeChat }] =
    useDisclosure(false);
  return (
    <Container
      w="100%"
      pos="relative"
      h="calc(100vh - 60px)"
      maw={1200}
      px="lg"
      pb="md"
    >
      <Group align="flex-start" justify="center" h="100%" gap="xl">
        <Box flex={{ base: 1, sm: 2 }} maw={700}>
          <VideoAndScript />
        </Box>
        <Box
          pos={{ base: "absolute", sm: "static" }}
          bottom={16}
          right={24}
          style={{ zIndex: 20 }}
          hidden={!chatOpened}
        >
          <Chat onCloseChat={closeChat} />
        </Box>
      </Group>
      <Group
        pos="absolute"
        bottom={16}
        right={24}
        style={{ display: chatOpened ? "none" : "flex" }}
      >
        <Tooltip label="Open Chat" position="top" withArrow>
          <ActionIcon
            size="xl"
            variant="white"
            radius="xl"
            onClick={openChat}
            styles={{
              root: {
                boxShadow:
                  "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
              },
            }}
          >
            <IconMessageCircle size={20} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Container>
  );
}
