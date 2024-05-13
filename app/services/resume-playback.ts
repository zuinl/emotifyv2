import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

type ResumePlaybackParams = {
  /**
   * ID do dispositivo
   */
  device_id?: string;
};

export const useResumePlayback = ({ device_id }: ResumePlaybackParams) => {
  const getResumePlaybackFetcher = async () => {
    return fetch(
      `${baseAPI}/me/player/play?` +
        new URLSearchParams({ device_id: device_id ?? "" }),
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "resume-playback",
    getResumePlaybackFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
