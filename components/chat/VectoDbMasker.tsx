import { createDocument } from "@/requests/create-document-vector";
import { getAllDocument } from "@/requests/get-all-document-vector";
import { Center, Loader, Stack, Text } from "@mantine/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";

type Props = {
  children: React.ReactNode;
  onCloseChat?: () => void;
};

export function VectorDbMasker(props: Props) {
  const { id: videoId } = useRouter().query;

  const { data, isPending: documentIsPending } = useQuery({
    queryKey: ["document", videoId],
    queryFn: () => getAllDocument({ videoId: videoId as string }),
    enabled: !!videoId,
  });

  const {
    mutateAsync: createDocumentMutate,
    isPending: createDocumentIsPending,
  } = useMutation({
    mutationKey: ["create-document", videoId],
    mutationFn: createDocument,
  });

  const handleCreaeDocument = useCallback(() => {
    createDocumentMutate({
      videoId: videoId as string,
    });
  }, [videoId, createDocumentMutate]);

  useEffect(() => {
    if (data && data.count === 0) {
      handleCreaeDocument();
    }
  }, [handleCreaeDocument, data]);

  if (documentIsPending || createDocumentIsPending || !videoId) {
    return (
      <ChatHeader>
        <Center h="100%" w="100%">
          <Stack align="center" gap={40}>
            <Text fz="lg" ta="center">
              Assistant is studying your youtube video...
            </Text>
            <Loader color="gray" />
          </Stack>
        </Center>
      </ChatHeader>
    );
  }

  // if (!data || data.count === 0) {
  //   return (
  //     <ChatHeader>
  //       <Center h="100%" w="100%">
  //         <Stack align="center" gap={40}>
  //           <Text fz="lg" ta="center">
  //             You have no valid OpenAI API Key
  //           </Text>
  //           <Text fz="lg" ta="center">
  //             Currently, this app requested your api key to run this app. Please
  //             register your api key and paste it here.
  //           </Text>
  //           <OpenaiApiKeyInput />
  //           <Button variant="default" onClick={handleCreaeDocument}>
  //             Try Again
  //           </Button>
  //         </Stack>
  //       </Center>
  //     </ChatHeader>
  //   );
  // }
  return props.children;
}
