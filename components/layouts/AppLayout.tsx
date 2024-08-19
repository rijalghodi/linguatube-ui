import {
  ActionIcon,
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Group,
  Menu,
  NavLink,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import Image from "next/image";
import logo from "@/public/logo.png";

import { OpenaiApiKeyInput } from "../OpenaiApiKeyInput";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronsLeft,
  IconInfoCircle,
  IconMenu4,
  IconPlus,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import styles from "@/styles/component.module.css";
import { SettingModal } from "../SettingModal";
import { modals } from "@mantine/modals";
import { useRouter } from "next/router";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <AppShell
      layout="alt"
      header={{
        height: 60,
      }}
      footer={{ height: "auto" }}
    >
      <AppShell.Header py="sm" px="md" withBorder={false}>
        <Container maw={800}>
          <Group h="100%" gap="xl" w="100%" justify="space-between">
            <Group gap="xs">
              <Image src={logo} alt="Logo" width={36} height={36} />
              <Text fz="xl" fw="bold">
                Linguatube
              </Text>
            </Group>
            <Group gap="md">
              <Button
                variant="subtle"
                color="gray"
                onClick={() =>
                  modals.openContextModal({
                    modal: "vocab-book",
                    innerProps: {},
                    title: "Vocabulary",
                    size: "xl",
                  })
                }
              >
                Your Vocabulary
              </Button>
              <Menu shadow="sm" width={140} position="bottom-end">
                <Menu.Target>
                  <ActionIcon variant="subtle" color="dark" size="lg">
                    <IconMenu4 size={22} />
                  </ActionIcon>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    leftSection={<IconSettings size={16} />}
                    onClick={() =>
                      modals.openContextModal({
                        modal: "setting",
                        innerProps: {},
                        title: "Settings",
                      })
                    }
                  >
                    Settings
                  </Menu.Item>
                  <Menu.Item
                    leftSection={<IconInfoCircle size={16} />}
                    onClick={() =>
                      modals.openContextModal({
                        modal: "about",
                        innerProps: {},
                        title: "About",
                      })
                    }
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    color="red"
                    leftSection={<IconTrash size={16} />}
                    onClick={() =>
                      modals.openConfirmModal({
                        title: "Reset Chat Confirmation",
                        children: (
                          <Text size="sm">
                            This action will remove chat session and video
                            history
                          </Text>
                        ),
                        confirmProps: { color: "red" },
                        labels: { confirm: "Reset Chat", cancel: "Cancel" },
                        onConfirm: () => router.push("/"),
                      })
                    }
                  >
                    Reset Chat
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>

      {/* <AppShell.Navbar
        p="md"
        h="100%"
        bg="var(--mantine-color-default-hover)"
        withBorder={false}
      >
        <AppShell.Section>
          <Group justify="space-between">
            <Tooltip
              label={opened ? "Close Menu" : "Open Menu"}
              position="right"
            >
              <ActionIcon
                variant="subtle"
                color="dark"
                onClick={toggle}
                size="lg"
              >
                <IconChevronsLeft size={22} strokeWidth={2} />
              </ActionIcon>
            </Tooltip>
            <Tooltip label={"Add new resource"} position="right">
              <ActionIcon variant="subtle" color="dark" size="lg">
                <IconPlus size={22} />
              </ActionIcon>
            </Tooltip>
          </Group>
        </AppShell.Section>
        <AppShell.Section my="sm">
          <OpenaiApiKeyInput />
        </AppShell.Section>
        <AppShell.Section grow my="xs" component={ScrollArea}>
          <NavLink
            label="Chat 1"
            classNames={{ root: styles.secondLayerHover }}
          ></NavLink>
        </AppShell.Section>
        <AppShell.Section>
          <NavLink
            label="Dictionary"
            classNames={{ root: styles.secondLayerHover }}
          ></NavLink>
        </AppShell.Section>
      </AppShell.Navbar> */}
    </AppShell>
  );
}
