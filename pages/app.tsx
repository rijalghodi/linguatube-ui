import { AppLayout } from "@/components/layouts";
import { Group } from "@mantine/core";
import React from "react";
type Props = {};
export default function AppPage(props: Props) {
  return <Group></Group>;
}

AppPage.getLayout = function getLayout(page: React.JSX.Element) {
  return <AppLayout>{page}</AppLayout>;
};
