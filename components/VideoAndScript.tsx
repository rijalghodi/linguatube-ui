import { ActionIcon, Box, Group, Stack, Text } from "@mantine/core";
import { IconPlayerPlay, IconVolume2 } from "@tabler/icons-react";
import React from "react";
type Props = {};
export function VideoAndScript(props: Props) {
  return (
    <Stack align="stretch">
      <Box style={{ aspectRatio: "16 / 9" }} w="100%">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/5M7GC7bWtA4"
          title='ONE PIECE Teaser  "The Log of the Turbulent Revolution! The Revolutionary Army Maneuvers in Secret!"'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>
      <Stack align="stretch">
        <Group gap="xs">
          <ActionIcon size="md" variant="subtle" radius="xl">
            <IconVolume2 size={16} />
          </ActionIcon>
          <Text component="p">
            A mundane decision that you need to take what book to read?
          </Text>
        </Group>
      </Stack>
    </Stack>
  );
}
