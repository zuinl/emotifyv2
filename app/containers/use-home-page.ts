import { useEffect, useState } from "react";
import { TabOptions } from "@tps/components/tab-menu";
import { useGetPlaylists } from "@services/get-playlists";
import { showAlert } from "../utils/show-alert";

export const useHomePage = () => {
  const [tab, setTab] = useState<TabOptions>("now");

  const playlistsData = useGetPlaylists();

  useEffect(() => {
    if(playlistsData.error) {
      showAlert({
        title: "Erro",
        message: "Houve um erro ao carregar as playlists",
        showCancelButton: true,
        cancelText: "OK",
      })
    }
  }, [playlistsData.error])

  const onTabChange = (newTab: TabOptions) => setTab(newTab);

  return {
    tab,
    onTabChange,
    playlists: playlistsData.data?.items ?? [],
    loadingPlaylists: playlistsData.isLoading,
  };
};
