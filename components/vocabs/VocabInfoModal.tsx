import { ContextModalProps } from "@mantine/modals";
import { VocabInfo } from "./VocabInfo";

export function VocabInfoModal({
  innerProps,
  context,
  id,
}: ContextModalProps<{ word: string; meaning?: string; sentence?: string }>) {
  return (
    <VocabInfo
      word={innerProps.word}
      meaning={innerProps.meaning}
      sentence={innerProps.sentence}
      onSuccessSave={() => context.closeContextModal(id)}
    />
  );
}
