import {
  getFullSentenceSelection,
  getFullWordSelection,
  getSelectionPosition,
} from "@/utils";
import { timestampToSecond } from "@/utils/timestamp-to-second";
import { ActionIcon, Group, Stack, Text, Tooltip } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconLanguageHiragana, IconVolume2 } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

type ScriptData = {
  text: string;
  start?: number;
  timestamp: string;
};
type Props = {
  scripts: ScriptData[];
  onSeekTo?: (time: number) => void;
};
export function Script(props: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [helperPos, setHelperPos] = useState<{
    top: number;
    right: number;
  } | null>(null);

  const [selectedFullSentence, setSelectedFullSentence] = useState<
    string | null
  >(null);
  const [selectedFullWord, setSelectedFullWord] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseUp = () => {
      const selection = window.getSelection();
      const containerPos = containerRef.current?.getBoundingClientRect();

      if (
        selection &&
        !selection.isCollapsed &&
        selection.toString().length > 0 &&
        selection.rangeCount > 0
      ) {
        const fullWord = getFullWordSelection(selection);
        const fullSentence = getFullSentenceSelection(selection);
        const selectionPos = getSelectionPosition(selection);

        if (fullWord) setSelectedFullWord(fullWord);
        if (fullSentence) setSelectedFullSentence(fullSentence);
        if (selectionPos && containerPos) {
          const topPos = selectionPos.top - containerPos.top;
          setHelperPos({
            top: topPos > 40 ? topPos - 40 : topPos + 30,
            right: containerPos.right - selectionPos.right,
          });
        }
        return;
      }

      setSelectedFullSentence(null);
      setSelectedFullWord(null);
      setHelperPos(null);
    };

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <Stack align="stretch" ref={containerRef} pos="relative">
      {props.scripts.map((script, i) => (
        <Group gap="xs" key={i} wrap="nowrap" align="flex-start">
          <ActionIcon
            size="md"
            color="red"
            variant="subtle"
            radius="xl"
            onClick={() => {
              props.onSeekTo?.(timestampToSecond(script.timestamp));
            }}
          >
            <IconVolume2 size={16} />
          </ActionIcon>
          <Text component="p">{script.text}</Text>
        </Group>
      ))}
      {helperPos && (
        <Group
          pos="absolute"
          right={helperPos.right}
          top={helperPos.top}
          style={{ zIndex: 20 }}
        >
          <Tooltip label="Word Information" withArrow>
            <ActionIcon
              size="lg"
              variant="white"
              radius="xl"
              styles={{
                root: {
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                },
              }}
              onClick={() => {
                modals.openContextModal({
                  modal: "vocab-info",
                  title: "Word Information",
                  innerProps: {
                    word: selectedFullWord,
                    sentence: selectedFullSentence,
                  },
                  size: "xl",
                });
              }}
            >
              <IconLanguageHiragana size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      )}
    </Stack>
  );
}
