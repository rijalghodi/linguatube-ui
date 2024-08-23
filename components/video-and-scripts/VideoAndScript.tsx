import { getTranscript } from "@/requests/get-transcript";
import { getVideo } from "@/requests/get-video";
import { Box, Center, Loader, ScrollArea, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Script } from "./Script";
import { YoutubePlayer, YoutubePlayerRef } from "./YoutubePlayer";
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
        <Loader color="gray" />
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
