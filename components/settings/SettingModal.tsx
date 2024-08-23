import { Stack, Text } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import { ColorSchemeInput } from "./ColorSchemeInput";
import { NativeLanguageInput } from "./NativeLanguageInput";
import { OpenaiApiKeyInput } from "./OpenaiApiKeyInput";

export function SettingModal({
  innerProps,
}: ContextModalProps<{ modalBody: string }>) {
  return (
    <Stack>
      {innerProps.modalBody && <Text>{innerProps.modalBody}</Text>}
      <OpenaiApiKeyInput />
      <NativeLanguageInput />
      <ColorSchemeInput />
    </Stack>
  );
}
