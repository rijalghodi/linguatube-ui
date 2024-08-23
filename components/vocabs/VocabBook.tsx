import { Vocab } from "@/types/vocab";
import { Box, Table, TableData, Text } from "@mantine/core";
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
    <Box>
      <Table.ScrollContainer minWidth={600}>
        <Table
          data={tableData}
          stickyHeader
          stickyHeaderOffset={0}
          striped
          fz="md"
        />
      </Table.ScrollContainer>
      {tableData.body?.length === 0 && (
        <Text py="lg" ta="center">
          You have not added any vocabulary yet.
        </Text>
      )}
    </Box>
  );
}
