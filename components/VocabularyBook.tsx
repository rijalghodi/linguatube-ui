import { Vocab } from "@/types/vocab";
import { Table, TableData } from "@mantine/core";
import React from "react";
type Props = {};
export function VocabularyBook(props: Props) {
  const vocabString = localStorage.getItem("vocab");
  const vocab = vocabString
    ? (JSON.parse(vocabString) as Vocab[])
    : ([] as Vocab[]);
  const tableData: TableData = {
    head: ["Word", "Meaning", "Example"],
    body: vocab.map((v) => [v.word, v.meaning, v.sentence]),
  };

  return (
    <Table data={tableData} stickyHeader stickyHeaderOffset={60} striped />
  );
}
