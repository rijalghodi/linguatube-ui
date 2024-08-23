import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";

type Request = {
  videoId: string;
};
type Response = {
  count: number;
};
export const getAllDocument = async ({ videoId }: Request) => {
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");

  try {
    const response = await axiosInstance.get<Response>(
      `/video/${videoId}/document?api_key=${apiKey}`
    );

    return response.data;
  } catch (err) {
    Promise.reject(err);
  }
};
