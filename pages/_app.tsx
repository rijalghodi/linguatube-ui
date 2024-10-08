import { AboutModal } from "@/components/settings/AboutModal";
import { SettingModal } from "@/components/settings/SettingModal";
import { VocabBookModal } from "@/components/vocabs/VocabBookModal";
import { VocabInfoModal } from "@/components/vocabs/VocabInfoModal";
import "@/styles/global.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import { Fira_Sans } from "next/font/google";
import { defaultSeo } from "../next-seo.config";
import { theme } from "../theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const font = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: any) {
  const getLayout = Component.getLayout ?? ((page: React.JSX.Element) => page);
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <QueryClientProvider client={queryClient}>
        <div className={`${font.className}`}>
          <MantineProvider
            theme={{ ...theme, fontFamily: font.style.fontFamily }}
          >
            <Notifications
              position="bottom-center"
              styles={{
                notification: {
                  boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
                },
              }}
            />
            <ModalsProvider
              modals={{
                setting: SettingModal,
                about: AboutModal,
                "vocab-book": VocabBookModal,
                "vocab-info": VocabInfoModal,
              }}
              modalProps={{ centered: true, size: "md" }}
            >
              {getLayout(<Component {...pageProps} />)}
            </ModalsProvider>
          </MantineProvider>
        </div>
      </QueryClientProvider>
    </>
  );
}
