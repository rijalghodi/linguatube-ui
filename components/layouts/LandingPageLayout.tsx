import {
  ActionIcon,
  AppShell,
  Box,
  Button,
  Container,
  Group,
  ScrollArea,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { IconBrandGithub } from "@tabler/icons-react";

export function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      header={{ height: 54 }}
      footer={{ height: "auto" }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header px="md">
        <Group justify="space-between" h="100%" maw={800} w="100%" mx="auto">
          <Group gap="xs">
            <Image src={logo} alt="Logo" width={36} height={36} />
            <Text fz="lg" fw="bold">
              Linguatube
            </Text>
          </Group>
          <ActionIcon
            component={Link}
            href="https://github.com/rijalghodi/linguatube-ui"
            color="gray"
            variant="subtle"
          >
            <IconBrandGithub size={18} />
          </ActionIcon>
        </Group>
      </AppShell.Header>
      <AppShell.Main pb={80}>{children}</AppShell.Main>
      <AppShell.Footer
        withBorder={false}
        pb="md"
        pt="xl"
        pos="static"
        bg="var(--mantine-color-default-hover)"
      >
        <Stack align="center" gap="xs" mx="auto" maw={800}>
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
      </AppShell.Footer>
    </AppShell>
  );
}
