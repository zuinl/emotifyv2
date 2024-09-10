import { useEffect, useState } from "react";
import { TabOptions } from "@tps/components/tab-menu";
import { useGetPlaylists } from "@services/get-playlists";
import { showAlert } from "@utils/show-alert";
import { useGetTopSongs } from "@services/get-top-songs";
import { UseHomePageParams } from "@tps/containers/use-home-page";
import { useCheckedSavedSongs } from "@services/check-saved-songs";

export const useHomePage = ({ limit }: UseHomePageParams) => {
  const [tab, setTab] = useState<TabOptions>("now");
  const [savedSongsIds, setSavedSongsIds] = useState<string[]>([]);
  const [listedSongsIds, setListedSongsIds] = useState<string[]>([]);

  const playlistsData = useGetPlaylists(limit);
  const topSongsData = useGetTopSongs();
  const savedSongsData = useCheckedSavedSongs(listedSongsIds);

  useEffect(() => {
    /* istanbul ignore next */
    if (playlistsData.error) {
      showAlert({
        title: "Erro",
        message: "Houve um erro ao carregar as playlists",
        showCancelButton: true,
        cancelText: "OK",
      });
    }
  }, [playlistsData.error]);

  useEffect(() => {
    if (topSongsData.data) {
      setListedSongsIds((prev) => [
        ...prev,
        ...(topSongsData.data?.items.map((topSong) => topSong.id) ?? []),
      ]);
    }
  }, [topSongsData.data]);

  useEffect(() => {
    if (savedSongsData.data) {
      const savedSongs: string[] = savedSongsData.songsIds.filter((_, idx) => {
        if (savedSongsData.data && savedSongsData.data[idx] === true)
          return true;
        return false;
      });
      setSavedSongsIds((prev) => [...prev, ...savedSongs]);
    }
  }, [savedSongsData.data]);

  useEffect(() => {
    if (listedSongsIds.length > 0) {
      savedSongsData.mutate(undefined);
    }
  }, [listedSongsIds]);

  const onTabChange = (newTab: TabOptions) => setTab(newTab);

  const onLikeChangeCallback = (songId: string): void => {
    if (savedSongsIds.includes(songId)) {
      setSavedSongsIds((prev) =>
        prev.filter((savedSongId) => savedSongId !== songId),
      );
    } else {
      setSavedSongsIds((prev) => [...prev, songId]);
    }
  };

  return {
    tab,
    onTabChange,
    playlists: playlistsData.data?.items ?? [],
    loadingPlaylists: playlistsData.isLoading,
    topSongs: topSongsData.data?.items,
    topSongsLoading: topSongsData.isLoading,
    savedSongsIds,
    onLikeChangeCallback,
  };
};
