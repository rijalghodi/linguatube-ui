import { Video } from "@/types/video";
import { axiosInstance } from "./axios-instace";
import { Transcript } from "@/types/transcript";

type ScrapYoutubeRequest = {
  youtubeId: string;
};
type ScrapYoutubeResponse = {
  video: Video;
  transcript: Transcript;
};
export const scrapYoutube = async ({ youtubeId }: ScrapYoutubeRequest) => {
  try {
    const response = await axiosInstance.post<ScrapYoutubeResponse>(
      "/scrap-youtube/",
      {
        youtube_id: youtubeId,
      }
    );

    const result = response.data;
    return result;
  } catch (err) {
    Promise.reject(err);
  }
};
