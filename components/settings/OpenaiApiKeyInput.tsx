import { PasswordInput, PasswordInputProps } from "@mantine/core";
import React, { useState } from "react";
type Props = PasswordInputProps;
export function OpenaiApiKeyInput(props: Props) {
  const initKey = localStorage.getItem("linguatube.openaiApiKey");
  const [key, setKey] = useState<string>(initKey ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;

    localStorage.setItem("linguatube.openaiApiKey", value);

    setKey(value);
  };      

  return (
    <PasswordInput
      label="OpenAI API Key"
      placeholder="pk-123..."
      value={key}
      onChange={handleChange}
      size="sm"
      {...props}
    />
  );
}
