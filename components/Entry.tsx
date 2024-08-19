import { Button, Flex, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";
import { NativeLanguageInput } from "./NativeLanguageInput";
import { IconMessageCircle } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { scrapYoutube } from "@/requests/scrap-youtube";
import { getYoutubeId } from "@/utils/getYoutubeId";
import { notifications } from "@mantine/notifications";
type Props = {};
export function Entry(props: Props) {
  const router = useRouter();
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const { isPending: scrapIsPending, mutateAsync: scrapMutate } = useMutation({
    mutationFn: scrapYoutube,
    mutationKey: ["scrap-youtube"],
  });
  const startLearning = async (youtubeUrl: string) => {
    const youtubeId = getYoutubeId(youtubeUrl);

    if (!youtubeId) {
      notifications.show({
        message: "Invalid Youtube Url",
        color: "red",
      });
      return;
    }
    const data = await scrapMutate({ youtubeId });
    if (!data) {
      notifications.show({
        message: "Something went wrong",
        color: "red",
      });
      return;
    }

    router.push({
      pathname: "/",
      query: { id: data.video.id },
    });
  };
  return (
    <Stack component="section" maw={600} w="100%" mx="auto" align="center">
      <Flex
        direction={{ sm: "row", base: "column" }}
        gap="sm"
        justify="stretch"
        w="100%"
      >
        <OpenaiApiKeyInput flex={1} />
        <NativeLanguageInput flex={1} />
      </Flex>
      <TextInput
        size="md"
        placeholder="Paste a Youtube Url here"
        w="100%"
        color="dark"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        onPaste={(e) => {
          console.log(e);
          const url = e.clipboardData.getData("text/plain");
          setYoutubeUrl(url);
          startLearning(url);
        }}
      />
      <Button
        size="lg"
        onClick={() => startLearning(youtubeUrl)}
        leftSection={<IconMessageCircle />}
        maw={200}
        w="100%"
        loading={scrapIsPending}
        color="dark.4"
      >
        Learn
      </Button>
    </Stack>
  );
}
