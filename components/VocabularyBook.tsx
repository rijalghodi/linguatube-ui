import { Table, TableData } from "@mantine/core";
import React from "react";
type Props = {};
export function VocabularyBook(props: Props) {
  const tableData: TableData = {
    head: ["Word", "Meaning", "Example"],
    body: [
      ["Summer", "Musim Panas", "Summer is hot"],
      ["Summer", "Musim Panas", "Summer is hot"],
      ["Summer", "Musim Panas", "Summer is hot"],
      ["Summer", "Musim Panas", "Summer is hot"],
    ],
  };

  return (
    <Table data={tableData} stickyHeader stickyHeaderOffset={60} striped />
  );
}
