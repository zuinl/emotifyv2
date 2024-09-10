import useSWRMutation from "swr/mutation";
import { baseAPI } from "@utils/constants";
import { getAccessToken } from "@utils/get-access-token";

export const useToggleShuffleState = (state: boolean) => {
  const useToggleShuffleStateFetcher = async () => {
    return fetch(
      `${baseAPI}/me/player/shuffle?` +
        new URLSearchParams({ state: String(state) }),
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "toggle-shuffle",
    useToggleShuffleStateFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
