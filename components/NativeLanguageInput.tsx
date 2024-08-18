import { Select, SelectProps } from "@mantine/core";
import React, { useState } from "react";
type Props = SelectProps;
export function NativeLanguageInput(props: Props) {
  const initLanguage = localStorage.getItem("linguatube.nativeLanguage");
  const [language, setLanguage] = useState<string | null>(initLanguage);

  const handleChange = (value: string | null) => {
    if (value) {
      localStorage.setItem("linguatube.nativeLanguage", value);
    }
    setLanguage(value);
  };
  return (
    <Select
      label="Your native language"
      placeholder="Select language"
      searchable
      miw={250}
      data={[
        { value: "en", label: "English" },
        { value: "id", label: "Indonesian" },
        { value: "uz", label: "Uzbekistan" },
      ]}
      value={language}
      onChange={handleChange}
      {...props}
    ></Select>
  );
}
