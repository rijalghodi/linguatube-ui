import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";
import { Transcript } from "@/types/transcript";

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
  try {
    const response = await axiosInstance.get<ListThreadMessageResponse>(
      `/thread/${threadId}/message`
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
