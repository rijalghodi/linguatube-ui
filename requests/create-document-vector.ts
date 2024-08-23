import { axiosInstance } from "./axios-instace";

type InsertMessageRequest = {
  videoId: string;
};
type InsertMessageResponse = {
  ids: string[];
};

export const createDocument = async ({ videoId }: InsertMessageRequest) => {
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");

  try {
    const response = await axiosInstance.post<InsertMessageResponse>(
      `video/${videoId}/document`,
      {
        api_key: apiKey,
      }
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
