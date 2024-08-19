import { Vocab, WordInfo } from "@/types/vocab";
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
  try {
    const response = await axiosInstance.post<Response>("/translate/invoke", {
      input: {
        word,
        sentence,
        language: nativeLanguage,
      },
    });

    const result = response.data.output;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
