import { axiosInstance } from "./axios-instace";

type ListThreadMessageRequest = {
  threadId: string;
};
type ListThreadMessageResponse = {
  data: {
    role: string;
    content: string;
  }[];
  count: number;
};
export const listThreadMessage = async ({
  threadId,
}: ListThreadMessageRequest) => {
  const apiKey = localStorage.getItem("linguatube.openaiApiKey");
  try {
    const response = await axiosInstance.get<ListThreadMessageResponse>(
      `/thread/${threadId}/message?api_key=${apiKey}`
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
