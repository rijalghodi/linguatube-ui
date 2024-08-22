import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";
import { Transcript } from "@/types/transcript";

type CreateThreadRequest = {
  videoId: string;
  title?: string;
  mode?: string;
};
type CreateThreadResponse = {
  id: string;
  thread_id: string;
  video_id: string;
  title?: string;
  mode?: string;
};

export const createThread = async ({
  title,
  mode,
  videoId,
}: CreateThreadRequest) => {
  try {
    const response = await axiosInstance.post<CreateThreadResponse>(
      `/video/${videoId}/thread`,
      {
        title,
        mode,
      }
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
