import useSWR from "swr";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";
import { GetPlaybackDTO } from "../types/services/get-playback.dto";

export const useGetPlayback = (shouldFetch: boolean) => {
  const getPlaybackFetcher = async () => {
    return fetch(`${baseAPI}/me/player?`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    }).then((res) => {
      /* istanbul ignore next */
      return res.status === 204 ? null : res.json();
    });
  };

  const { data, error, isLoading, mutate } = useSWR<GetPlaybackDTO>(
    shouldFetch ? "get-playback" : null,
    getPlaybackFetcher,
    { refreshInterval: 1000 },
  );

  return { data, error, isLoading, mutate };
};
