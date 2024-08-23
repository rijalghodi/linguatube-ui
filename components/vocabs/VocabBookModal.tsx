import { Stack, Text } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals";
import { VocabBook } from "./VocabBook";

export function VocabBookModal({
  innerProps,
}: ContextModalProps<{ modalBody?: string }>) {
  return (
    <Stack>
      {innerProps.modalBody && <Text>{innerProps.modalBody}</Text>}
      <VocabBook />
    </Stack>
  );
}
