import useSWR from "swr";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";
import { GetTopSongsDTO } from "../types/services/get-top-songs";

export const useGetTopSongs = () => {
  const getTopSongsFetcher = async () => {
    return fetch(
      `${baseAPI}/me/top/tracks?` +
        new URLSearchParams({
          time_range: "short_term",
          limit: "20",
          offset: "0",
        }),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR<GetTopSongsDTO>(
    "get-top-songs",
    getTopSongsFetcher,
  );

  return { data, error, isLoading, mutate };
};
