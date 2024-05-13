import useSWRMutation from "swr/mutation";
import { baseAPI } from "@utils/constants";
import { getAccessToken } from "@utils/get-access-token";
import { ContextType } from "@tps/services/common";

type StartPlaybackParams = {
  /**
   * ID do dispositivo
   */
  device_id?: string;
  /**
   * O identificador da faixa a ser iniciada
   */
  id: string;
};

export const useStartPlayback = ({ device_id, id }: StartPlaybackParams) => {
  const bodyData = {
    uris: [`spotify:track:${id}`],
    position_ms: 0,
  };

  const getStartPlaybackFetcher = async () => {
    return fetch(
      `${baseAPI}/me/player/play?` +
        new URLSearchParams({ device_id: device_id ?? "" }),
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${await getAccessToken()}`,
        },
        body: JSON.stringify(bodyData),
      },
    ).then((res) => res.status);
  };

  const { data, error, isMutating, trigger, reset } = useSWRMutation<number>(
    "start-playback",
    getStartPlaybackFetcher,
  );

  return { data, error, isMutating, trigger, reset };
};
