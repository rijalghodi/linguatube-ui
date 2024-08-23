import { WordInfo } from "@/types/vocab";
import { axiosInstance } from "./axios-instace";

type Request = {
  word: string;
  sentence?: string;
  apiKey?: string;
};
type Response = {
  output: string;
};
export const invokeWordInfo = async ({ word, sentence = "" }: Request) => {
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");

  try {
    const response = await axiosInstance.post<Response>("/word/info/", {
      word,
      sentence,
      api_key: apiKey,
    });

    const result = (await JSON.parse(response.data.output)) as WordInfo;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
