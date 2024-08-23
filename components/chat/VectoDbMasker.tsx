import {
  ActionIcon,
  Box,
  Center,
  Group,
  Loader,
  Stack,
  Tooltip,
} from "@mantine/core";
import React, { useEffect } from "react";
import { Text } from "@mantine/core";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getAllDocument } from "@/requests/get-all-document-vector";
import { createDocument } from "@/requests/create-document-vector";
import { IconChevronDown } from "@tabler/icons-react";

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

  useEffect(() => {
    if (data && data.count === 0) {
      createDocumentMutate({
        videoId: videoId as string,
      });
    }
  }, [data, createDocumentMutate, videoId]);

  if (documentIsPending || createDocumentIsPending || !videoId) {
    return (
      <Box h="100%">
        <Group
          justify="space-between"
          px="sm"
          py="sm"
          style={{
            borderBottom: "1px solid var(--mantine-color-default-border)",
          }}
        >
          <Group gap={4}>
            <Image
              src={logo}
              alt="logo"
              width={28}
              height={28}
              objectFit="cover"
            />
            <Text fz="lg" fw={600}>
              Chat Assistant
            </Text>
          </Group>
          <Group gap="sm">
            <Tooltip label="Close chat" withArrow>
              <ActionIcon
                size="lg"
                color="gray"
                variant="subtle"
                onClick={props.onCloseChat}
              >
                <IconChevronDown size={16} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
        <Center h="100%" w="100%">
          <Stack align="center" gap={40}>
            <Text fz="lg" ta="center">
              Assistant is studying your youtube video...
            </Text>
            <Loader color="gray" />
          </Stack>
        </Center>
      </Box>
    );
  }
  return props.children;
}
