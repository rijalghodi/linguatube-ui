import { AppWorkspace } from "@/components/AppWorkspace";
import { Introduction } from "@/components/Introduction";
import { AppLayout } from "@/components/layouts";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

export default function IndexPage({}: Props) {
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (router.isReady) {
      setIsReady(true);
    }
  }, [router.isReady]);

  if (!isReady) {
    return null;
  }
  if (id) {
    return <AppWorkspace />;
  }

  return <Introduction />;
}

IndexPage.getLayout = function getLayout(page: React.JSX.Element) {
  return <AppLayout>{page}</AppLayout>;
};
