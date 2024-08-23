import { axiosInstance } from "./axios-instace";

type GetAllVideoResponse = {
  count: string;
  data: {
    thumbnail_url: string;
    id: string;
    youtube_id: string;
    title: string;
  }[];
};
type GetAllVideoRequest = {
  count: number;
};
export const getAllVideo = async ({ count }: GetAllVideoRequest) => {
  try {
    const response = await axiosInstance.get<GetAllVideoResponse>(
      `/video?count=${count}`
    );
    return response.data;
  } catch (err) {
    Promise.reject(err);
  }
};
