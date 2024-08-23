import { axiosInstance } from "./axios-instace";

type Request = {
  word: string;
  sentence?: string;
  nativeLanguage?: string;
};

type Response = {
  output: string;
};
export const translateWord = async ({
  word,
  sentence = "",
  nativeLanguage = "English",
}: Request) => {
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");

  try {
    const response = await axiosInstance.post<Response>("/word/translate/", {
      word,
      sentence,
      language: nativeLanguage,
      api_key: apiKey,
    });

    const result = response.data.output;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
