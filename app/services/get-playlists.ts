import useSWR from "swr";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";
import { GetPlaylistsDTO } from "../types/services/get-playlists.dto";

export const useGetPlaylists = () => {
  const getPlaylistsFetcher = async () => {
    return fetch(
      `${baseAPI}/me/playlists?` + new URLSearchParams({ limit: "30" }),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR<GetPlaylistsDTO>(
    "get-playlists",
    getPlaylistsFetcher,
  );

  return { data, error, isLoading, mutate };
};
