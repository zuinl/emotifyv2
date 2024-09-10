import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const useRemoveSongs = (songsIds: string[]) => {
  let ids = "";
  songsIds.forEach((songId) => (ids += `${songId}`));
  const useRemoveSongsFetcher = async () => {
    return fetch(`${baseAPI}/me/tracks?` + new URLSearchParams({ ids: ids }), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ids: songsIds }),
    }).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "remove-songs",
    useRemoveSongsFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
