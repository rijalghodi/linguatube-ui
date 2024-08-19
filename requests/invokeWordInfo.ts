import { Vocab, WordInfo } from "@/types/vocab";
import { axiosInstance } from "./axios-instace";

type Request = {
  word: string;
  sentence?: string;
};
type Response = {
  output: string;
};
export const invokeWordInfo = async ({ word, sentence = "" }: Request) => {
  try {
    const response = await axiosInstance.post<Response>("/word-info/invoke", {
      input: {
        word,
        sentence,
      },
    });

    const result = (await JSON.parse(response.data.output)) as WordInfo;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
