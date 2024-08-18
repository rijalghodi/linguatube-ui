import { ActionIcon, Box, Container, Group, Tooltip } from "@mantine/core";
import React from "react";
import { VideoAndScript } from "./VideoAndScript";
import {
  IconBook2,
  IconCancel,
  IconMessage2,
  IconX,
} from "@tabler/icons-react";
import { Chat } from "./Chat";
type Props = {};
export function AppWorkspace(props: Props) {
  return (
    <Container
      w="100%"
      pos="relative"
      h="calc(100vh - 60px)"
      maw={1200}
      px="lg"
      pb="md"
    >
      <Group align="stretch" w="100%" h="100%" gap="xl">
        <Box flex={1.2}>
          <VideoAndScript />
        </Box>
        <Box flex={1}>
          <Chat />
        </Box>
      </Group>
    </Container>
  );
}
