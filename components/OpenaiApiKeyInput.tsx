import { PasswordInput } from "@mantine/core";
import React, { useState } from "react";
import { useOpenaiApiKey } from "@/store/openai_api_key.store";
type Props = {};
export function OpenaiApiKeyInput() {
  const { openaiApiKey, setOpenaiApiKey } = useOpenaiApiKey();

  return (
    <PasswordInput
      label="OpenAI API Key"
      placeholder="pk-123..."
      value={openaiApiKey}
      onChange={(e) => setOpenaiApiKey(e.target.value)}
      size="sm"
    />
  );
}
