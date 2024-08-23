import { Stack } from "@mantine/core";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import YouTubeIFrameCtrl from "youtube-iframe-ctrl";
type YoutubePlayerProps = {
  youtubeId: string;
};

export type YoutubePlayerRef = {
  seekTo: (time: number) => void;
};
export const YoutubePlayer = forwardRef<YoutubePlayerRef, YoutubePlayerProps>(
  (props, ref) => {
    const playerRef = useRef<YouTubeIFrameCtrl>(null);

    useImperativeHandle(ref, () => ({
      seekTo(time: number) {
        playerRef.current?.command("seekTo", [time]);
      },
    }));

    useEffect(() => {
      const youTubeIFrame = document.getElementById("youtube-iframe");
      if (youTubeIFrame) {
        (playerRef.current as any) = new YouTubeIFrameCtrl(
          youTubeIFrame as HTMLIFrameElement
        );
      }
    }, []);

    return (
      <Stack align="center" w="100%" gap="xs">
        <iframe
          id="youtube-iframe"
          src={`https://www.youtube.com/embed/${props.youtubeId}?enablejsapi=1`}
          title="YouTube video player"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            aspectRatio: "16 / 9",
            borderRadius: 12,
          }}
        ></iframe>
        {/* <Group w="100%" mx="auto" justify="center">
          <Button
            onClick={() =>
              playerRef.current?.command("setPlaybackRate", [0.75])
            }
          >
            Slow
          </Button>
        </Group> */}
      </Stack>
    );
  }
);

YoutubePlayer.displayName = "YoutubePlayer";
