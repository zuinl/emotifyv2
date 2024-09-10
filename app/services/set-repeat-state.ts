import useSWRMutation from "swr/mutation";
import { baseAPI } from "@utils/constants";
import { getAccessToken } from "@utils/get-access-token";
import { RepeatState } from "@tps/services/common";

export const useSetRepeatMode = (state: RepeatState) => {
  const useSetRepeatModeFetcher = async () => {
    return fetch(
      `${baseAPI}/me/player/repeat?` + new URLSearchParams({ state }),
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
      },
    ).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "repeat-mode",
    useSetRepeatModeFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
