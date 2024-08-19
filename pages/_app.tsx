import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/global.css";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { theme } from "../theme";
import { Fira_Sans, Montserrat, Source_Sans_3 } from "next/font/google";
import { DefaultSeo } from "next-seo";
import { defaultSeo } from "../next-seo.config";
import { SettingModal } from "@/components/SettingModal";
import { AboutModal } from "@/components/AboutModal";
import { VocabBookModal } from "@/components/VocabBookModal";
import { VocabInfoModal } from "@/components/VocabInfoModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

const queryClient = new QueryClient();

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
            <Notifications />
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
