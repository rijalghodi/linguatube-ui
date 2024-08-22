import { axiosInstance } from "./axios-instace";

type InsertMessageRequest = {
  threadId: string;
  videoId: string;
  content?: string;
};
type InsertMessageResponse = {
  content: string;
  role: string;
};

export const insertMessage = async ({
  threadId,
  videoId,
  content,
}: InsertMessageRequest) => {
  try {
    const response = await axiosInstance.post<InsertMessageResponse>(
      `video/${videoId}/thread/${threadId}`,
      {
        threadId,
        content,
        role: "human",
      }
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
