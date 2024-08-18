import { DefaultSeoProps } from "next-seo";

const defaultSeo: DefaultSeoProps = {
  title: "Linguatube - Learn english while watching youtube",
  defaultTitle: "Linguatube - Learn english while watching youtube",
  description:
    "Linguatube is an AI-powered application designed to help you learn English while watching YouTube. With our AI's assistance, you can enhance your vocabulary, grammar, and more. Try it out now!",
  openGraph: {
    type: "website",
    locale: "en",
    url: process.env.NEXT_PUBLIC_DEPLOY_URL,
    siteName: "Linguatube",
    title: "Linguatube - Learn english while watching youtube",
    description:
      "Linguatube is an AI-powered application designed to help you learn English while watching YouTube. With our AI's assistance, you can enhance your vocabulary, grammar, and more. Try it out now!",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/og-image.jpg`,
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
  twitter: {
    handle: "@zalcode_id",
    site: "@zalcode_id",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/favicon.ico`,
    },
    {
      rel: "apple-touch-icon",
      href: `${process.env.NEXT_PUBLIC_DEPLOY_URL}/touch-icon-ipad.jpg`,
      sizes: "76x76",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};

export { defaultSeo };
