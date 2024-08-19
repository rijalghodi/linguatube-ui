import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";
import { Transcript } from "@/types/transcript";

type Request = {
  videoId: string;
};
type Response = Video;
export const getVideo = async ({ videoId }: Request) => {
  try {
    const response = await axiosInstance.get<Response>(`/video/${videoId}`);

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
