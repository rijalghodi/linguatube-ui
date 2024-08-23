import { Transcript } from "@/types/transcript";
import { axiosInstance } from "./axios-instace";

type Request = {
  videoId: string;
};
type Response = {
  id: string;
  video_id: string;
  transcript: string;
  plain_transcript?: string;
  created_at: string;
};
export const getTranscript = async ({ videoId }: Request) => {
  try {
    const response = await axiosInstance.get<Response>(
      `/video/${videoId}/transcript`
    );

    const transcript = response.data.transcript;

    const result = JSON.parse(transcript) as Transcript[];

    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
