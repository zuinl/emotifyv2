import useSWR from "swr";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const useCheckedSavedSongs = (songsIds: string[]) => {
  let ids = "";
  songsIds.forEach((songId) => (ids += `${songId},`));
  const checkSavedSongsFetcher = async () => {
    return fetch(
      `${baseAPI}/me/tracks/contains?` + new URLSearchParams({ ids: ids }),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR<boolean[]>(
    "check-saved-songs",
    checkSavedSongsFetcher,
  );

  return { data, error, isLoading, mutate, songsIds };
};
