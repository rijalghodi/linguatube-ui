import { Select, SelectProps, useMantineColorScheme } from "@mantine/core";
import React, { useState } from "react";
import languages from "@/data/languages.json";
type Props = SelectProps;
export function ColorSchemeInput(props: Props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const handleChange = (value: string | null) => {
    localStorage.setItem("linguatube.colorScheme", value ?? "");
    toggleColorScheme();
  };
  return (
    <Select
      label="Theme"
      placeholder="Select theme"
      searchable
      miw={250}
      data={[
        { value: "dark", label: "Dark" },
        { value: "light", label: "Light" },
        { value: "auto", label: "Auto" },
      ]}
      value={colorScheme}
      onChange={handleChange}
      {...props}
    ></Select>
  );
}
