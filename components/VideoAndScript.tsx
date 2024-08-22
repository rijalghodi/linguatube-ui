import {
  ActionIcon,
  Box,
  Center,
  Group,
  Loader,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { IconPlayerPlay, IconVolume2 } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";
import React, { useRef } from "react";
import { Script } from "./Script";
import { useQuery } from "@tanstack/react-query";
import { getVideo } from "@/requests/get-video";
import { useRouter } from "next/router";
import { getTranscript } from "@/requests/get-transcript";
import { YoutubePlayer, YoutubePlayerRef } from "./YoutubePlayer";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";
type Props = {};
export function VideoAndScript(props: Props) {
  const playerRef = useRef<YoutubePlayerRef>(null);
  const { height, width } = useViewportSize();
  const router = useRouter();

  const { id } = router.query;

  const { isPending: getVideoIsPending, data: video } = useQuery({
    queryFn: () => getVideo({ videoId: id as string }),
    queryKey: ["video", id],
    enabled: !!id,
  });

  const { isPending: getTranscriptIsPending, data: transcript } = useQuery({
    queryFn: () => getTranscript({ videoId: id as string }),
    queryKey: ["transcript", id],
    enabled: !!id,
  });

  if (!router.isReady || getTranscriptIsPending || getVideoIsPending) {
    return (
      <Center w={500} h={400}>
        <Loader color="gray"/>
      </Center>
    );
  }

  return (
    <Stack align="stretch" gap="md">
      <Box w="100%">
        <YoutubePlayer youtubeId={video?.youtube_id ?? ""} ref={playerRef} />
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
          <Script
            scripts={transcript ?? []}
            onSeekTo={(time) => playerRef.current?.seekTo(time)}
          />
        </Box>
      </ScrollArea>
    </Stack>
  );
}
