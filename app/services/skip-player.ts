import useSWRMutation from "swr/mutation";
import { baseAPI } from "../utils/constants";
import { getAccessToken } from "../utils/get-access-token";

export const useSkipPlayer = () => {
  const skipPlayerFetcher = async () => {
    return fetch(`${baseAPI}/me/player/next`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    })
      .then((res) => res.status)
      .catch((e) => {
        console.log(e);
        return e;
      });
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "skip-player",
    skipPlayerFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
