import { axiosInstance } from "./axios-instace";

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
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");
  try {
    const response = await axiosInstance.post<CreateThreadResponse>(
      `/video/${videoId}/thread`,
      {
        title,
        mode,
        api_key: apiKey,
      }
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
