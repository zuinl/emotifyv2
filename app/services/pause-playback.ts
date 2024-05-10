import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const usePausePlayback = (device_id?: string) => {
  const getPausePlaybackFetcher = async () => {
    return fetch(
      `${baseAPI}/me/player/pause?` +
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
    "pause-playback",
    getPausePlaybackFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
