import { Vocab } from "@/types/vocab";
import { Stack, Text, Table, TableData } from "@mantine/core";
import React from "react";
type Props = {};
export function VocabBook(props: Props) {
  const vocabString = localStorage.getItem("linguatube.vocab");
  const vocab = vocabString
    ? (JSON.parse(vocabString) as Vocab[])
    : ([] as Vocab[]);
  const tableData: TableData = {
    head: ["Word", "Meaning", "Example"],
    body: vocab.map((v) => [v.word, v.meaning, v.sentence]),
  };

  return (
    <Stack>
      <Table data={tableData} stickyHeader stickyHeaderOffset={60} striped />
      {tableData.body?.length === 0 && (
        <Text py="lg" ta="center">
          No vocabulary entries found
        </Text>
      )}
    </Stack>
  );
}
