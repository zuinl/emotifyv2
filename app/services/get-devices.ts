import useSWR from "swr";
import { baseAPI } from "@utils/constants";
import { getAccessToken } from "@utils/get-access-token";
import { GetDevicesDTO } from "@tps/services/get-devices.dto";

export const useGetDevices = () => {
  const getDevicesFetcher = async () => {
    return fetch(`${baseAPI}/me/player/devices`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    }).then((res) => res.json());
  };

  const { data, error, isLoading, mutate } = useSWR<GetDevicesDTO>(
    "get-devices",
    getDevicesFetcher,
  );

  return { data, error, isLoading, mutate };
};
