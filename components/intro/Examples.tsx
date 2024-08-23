import { getAllVideo } from "@/requests/get-all-video";
import { Box, Group, Image, UnstyledButton } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

type Props = {};
export function Examples(props: Props) {
  const router = useRouter();
  const { data, isPending } = useQuery({
    queryKey: ["examples"],
    queryFn: () => getAllVideo({ count: 3 }),
  });
  if (isPending) return <Box p={2}>Loading...</Box>;
  return (
    <Group align="center" w="100%" justify="center">
      {data?.data.map(({ thumbnail_url, youtube_id, id, title }) => (
        <UnstyledButton
          onClick={() => router.push({ query: { id: id } })}
          key={id}
          style={{ textDecoration: "none" }}
        >
          {thumbnail_url ? (
            <Image
              key={id}
              src={thumbnail_url}
              alt="Example"
              w={200}
              h={100}
              fit="cover"
              style={{ aspectRatio: "16 / 9" }}
            />
          ) : (
            <iframe
              key={id}
              id="youtube-iframe"
              src={`https://www.youtube.com/embed/${youtube_id}`}
              unselectable="on"
              title={title}
              width="200px"
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
