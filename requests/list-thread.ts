import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";
import { Transcript } from "@/types/transcript";

type ListThreadRequest = {
  videoId: string;
};
type ListThreadResponse = {
  data: {
    id: string;
    video_id: string;
    thread_id: string;
    mode: string;
    title: string;
  }[];
  count: number;
};
export const listThread = async ({ videoId }: ListThreadRequest) => {
  try {
    const response = await axiosInstance.get<ListThreadResponse>(
      `/video/${videoId}/thread`
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
