import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const usePreviousPlayer = () => {
  const previousPlayerFetcher = async () => {
    return fetch(`${baseAPI}/me/player/next`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    }).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "previous-player",
    previousPlayerFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
