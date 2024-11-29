import { getAllVideo } from "@/requests/get-all-video";
import { Box, Grid, Group, Image, UnstyledButton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

type Props = {};
export function Examples(props: Props) {
  const router = useRouter();
  const { data, isPending } = useQuery({
    queryKey: ["examples"],
    queryFn: () => getAllVideo({ count: 4 }),
  });
  if (isPending) return <Box p={2}>Loading...</Box>;
  return (
    <Group wrap="wrap" align="center" w="100%" justify="center">
      {data?.data.map(({ thumbnail_url, youtube_id, id, title }) => (
        <UnstyledButton
          onClick={() => router.push({ query: { id: id } })}
          style={{ textDecoration: "none" }}
          key={id}
        >
          {thumbnail_url ? (
            <Image
              key={id}
              src={thumbnail_url}
              alt="Example"
              width={500}
              height={300}
              fit="cover"
              style={{ aspectRatio: "4 / 3" }}
            />
          ) : (
            <iframe
              key={id}
              id="youtube-iframe"
              src={`https://www.youtube.com/embed/${youtube_id}`}
              unselectable="on"
              title={title}
              width="100%"
              height="100%"
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                aspectRatio: "16 / 9",
                borderRadius: 12,
                position: "relative",
                zIndex: -10,
              }}
            ></iframe>
          )}
        </UnstyledButton>
      ))}
    </Group>
  );
}
