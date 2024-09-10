import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const useSaveSongs = (songsIds: string[]) => {
  const useSaveSongsFetcher = async () => {
    return fetch(`${baseAPI}/me/tracks`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
      body: JSON.stringify({ ids: songsIds }),
    }).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "save-songs",
    useSaveSongsFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
