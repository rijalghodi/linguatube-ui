import { AppLayout, LandingPageLayout } from "@/components/layouts";
import {
  Box,
  Button,
  Container,
  Group,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import demoImage from "@/public/og_image.png";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconBubble, IconMessageCircle } from "@tabler/icons-react";
import { OpenaiApiKeyInput } from "@/components";
import { useRouter } from "next/router";

type Props = {};

export function Introduction({}: Props) {
  const router = useRouter();
  const [demoOpened, { open: openDemo, close: closeDemo }] =
    useDisclosure(false);

  const openLearningPage = () => {
    // TODO: Open learning page with the provided Youtube video
    router.push({
      pathname: "/",
      query: { id: "todo" },
    });
  };
  return (
    <Stack h="100%" gap={64} maw={800} px="md" mx="auto">
      <Stack align="center" component="section" gap={0}>
        <Title order={1} fz={48} py="sm" ta="center" maw={540}>
          Learn English while Watching Youtube
        </Title>
        <Text
          component="p"
          fz="h3"
          c="var(--mantine-color-dimmed)"
          ta="center"
          mb="xl"
          maw={540}
        >
          Linguatube will help you understand english through watching youtube
          videos
        </Text>
      </Stack>
      <Stack component="section" maw={500} w="100%" mx="auto">
        <OpenaiApiKeyInput />
        <TextInput size="lg" placeholder="Paste a Youtube link here" />
        <Button
          size="lg"
          color="dark"
          onClick={openLearningPage}
          leftSection={<IconMessageCircle />}
        >
          Learn
        </Button>
      </Stack>
      <Stack align="center" component="section">
        <Title order={2} fz="h1">
          View Demo
        </Title>
        <UnstyledButton
          style={{ aspectRatio: "16 / 9", overflow: "clip" }}
          pos="relative"
          maw={800}
          w="100%"
          h="auto"
          onClick={openDemo}
        >
          <Image
            src={demoImage}
            alt="Logo"
            objectFit="cover"
            placeholder="blur"
            fill
          />
        </UnstyledButton>
      </Stack>
      <Stack component="section">
        <Title order={2} fz="h1" ta="center">
          Features
        </Title>
        <Text component="p" fz="xl" c="var(--mantine-color-dimmed)" ta="center">
          Dictionary, Video Summarizer, Smart Flashcard
        </Text>
      </Stack>
      <footer>
        <Stack align="center" gap="xs" mx="auto" maw={800} py="lg">
          <Text fz="xl" fw="bold" ta="center">
            Linguatube
          </Text>
          <Group>
            <Link href="https://github.com/rijalghodi/linguatube-ui">
              Source Code
            </Link>
            <Link href="https://github.com/rijalghodi/linguatube-ui/issues">
              Issues
            </Link>
            <Link href="https://github.com/rijalghodi/linguatube-ui/issues">
              Tutorial
            </Link>
          </Group>
          <Text ta="center">Handcrafted by Rijal Ghodi 2023</Text>
        </Stack>
      </footer>
      <Modal
        opened={demoOpened}
        onClose={closeDemo}
        centered
        withCloseButton={false}
        p={0}
        padding={0}
        size={1000}
        styles={{
          body: {
            aspectRatio: "16 / 9",
          },
        }}
      >
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
      </Modal>
    </Stack>
  );
}
