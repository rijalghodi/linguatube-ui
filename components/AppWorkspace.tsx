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
      pt="sm"
    >
      <Group align="stretch" justify="center" h="100%" gap="xl">
        <Box flex={{ base: 1, sm: 2 }} maw={640}>
          <VideoAndScript />
        </Box>
        <Box
          pos={{ base: "fixed", sm: "static" }}
          bottom={0}
          right={0}
          top={0}
          left={0}
          style={{ zIndex: 100, display: "flex", alignItems: "stretch" }}
          hidden={!chatOpened}
          h={{ base: "100vh", sm: "auto" }}
          w={{ base: "100vw", sm: 400 }}
        >
          <Chat onCloseChat={closeChat} />
        </Box>
      </Group>
      <Group
        pos="absolute"
        bottom={{ base: 24, md: 64 }}
        right={{ base: 24, md: 64 }}
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
