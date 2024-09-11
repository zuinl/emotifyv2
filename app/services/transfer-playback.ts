import useSWRMutation from "swr/mutation";
import { baseAPI } from "@utils/constants";
import { getAccessToken } from "@utils/get-access-token";

export const useTransferPlayback = (deviceId: string) => {
  const useTransferPlaybackFetcher = async () => {
    return fetch(`${baseAPI}/me/player`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
      body: JSON.stringify({ device_ids: [deviceId] }),
    }).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "transfer-playback",
    useTransferPlaybackFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
