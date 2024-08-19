import { ActionIcon, Box, Group, ScrollArea, Stack, Text } from "@mantine/core";
import { IconPlayerPlay, IconVolume2 } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import { Script } from "./Script";
type Props = {};
export function VideoAndScript(props: Props) {
  const { height, width } = useViewportSize();
  const scripts = [
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
    {
      text: "A mundane decision that you need to take what book to read?",
      time: "00:00",
    },
  ];
  return (
    <Stack align="stretch" gap="md">
      <Box style={{ aspectRatio: "16 / 9" }} w="100%">
        <iframe
          width="100%"
          height="100%"
          // src="https://www.youtube.com/embed/5M7GC7bWtA4"
          src="https://www.youtube.com/embed/5M7GC7bWtA4"
          title="Linguatube: Learn English while Watching Youtube"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </Box>
      <ScrollArea
        h={{
          base: "calc(100vh - (9/16)*100vw - 60px)",
          sm:
            width > 1200
              ? "calc(100vh - (9/16)*640px - 60px - 32px)"
              : "calc(100vh - (9/16)*(3/5)*100vw - 60px - 8px)",
        }}
      >
        <Box pb="sm">
          <Script scripts={scripts} />
        </Box>
      </ScrollArea>
    </Stack>
  );
}
