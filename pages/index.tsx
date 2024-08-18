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
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import demoImage from "@/public/og_image.png";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconBubble, IconMessageCircle } from "@tabler/icons-react";
import { OpenaiApiKeyInput } from "@/components";
import { useSearchParams } from "next/navigation";
import { Introduction } from "@/components/Introduction";
import { useRouter } from "next/router";
import { AppWorkspace } from "@/components/AppWorkspace";

type Props = {};

export default function IndexPage({}: Props) {
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  if (!isReady) {
    return null;
  }
  if (id) {
    return <AppWorkspace />;
  }

  return <Introduction />;
}

IndexPage.getLayout = function getLayout(page: React.JSX.Element) {
  return <AppLayout>{page}</AppLayout>;
};
