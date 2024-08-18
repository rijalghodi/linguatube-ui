import { PasswordInput, PasswordInputProps } from "@mantine/core";
import React, { useState } from "react";
import { useOpenaiApiKey } from "@/store/openai_api_key.store";
type Props = PasswordInputProps;
export function OpenaiApiKeyInput(props: Props) {
  const initKey = localStorage.getItem("openai-api-key");
  const [key, setKey] = useState<string>(initKey ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e?.target.value;
    if (value) {
      localStorage.setItem("openai-api-key", value);
    }
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
