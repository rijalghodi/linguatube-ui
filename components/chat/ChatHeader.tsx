import logo from "@/public/logo.png";
import { ActionIcon, Box, Group, Text, Tooltip } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  onCloseChat?: () => void;
  children: React.ReactNode;
};
export function ChatHeader(props: Props) {
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
      {props.children}
    </Box>
  );
}
