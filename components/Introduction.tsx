import {
  Group,
  Modal,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import Image from "next/image";
import demoImage from "@/public/og_image.png";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { Entry } from "./Entry";

type Props = {};

export function Introduction({}: Props) {
  const [demoOpened, { open: openDemo, close: closeDemo }] =
    useDisclosure(false);

  return (
    <Stack h="100%" gap={80} maw={800} px="md" mx="auto">
      <Stack align="center" component="section" gap="lg" py="xl">
        <Title
          order={1}
          fz={{ base: 40, xs: 48 }}
          py="md"
          ta="center"
          maw={540}
        >
          Learn english through watching YouTube
        </Title>
        <Text
          component="p"
          fz={{ base: "h4", xs: "h3" }}
          c="var(--mantine-color-dimmed)"
          ta="center"
          mb="xl"
          maw={540}
        >
          Learn and enjoy english with fun and abundant resources
        </Text>
        {/* ================== */}
        <Entry />
        {/* ================== */}
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
