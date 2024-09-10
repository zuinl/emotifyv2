import { StatusBar } from "expo-status-bar";
import { createContext, useEffect, useState } from "react";
import { BaseLayoutProviderProps } from "@tps/contexts/base-layout.context";
import { BaseLayout } from "@components/base-layout/base-layout";
import { PlayingFooter } from "@components/playing-footer/playing-footer";
import { useGetPlayback } from "@services/get-playback";
import { calculatePercent } from "@utils/calculate-percent";
import { usePausePlayback } from "@services/pause-playback";
import { useResumePlayback } from "@services/resume-playback";
import { useStartPlayback } from "@services/start-playback";
import { useSaveSongs } from "../services/save-songs";
import { useRemoveSongs } from "../services/remove-songs";
import { useSetRepeatMode } from "../services/set-repeat-state";
import { RepeatState } from "../types/services/common";
import { useToggleShuffleState } from "../services/toggle-shuffle-state";

type BaseLayoutContextValue = {
  isPlaying: boolean;
  isTrackPlaying: (trackId: string) => boolean;
  onSongPress: (trackId: string) => void;
  onSaveLikePress: (trackId: string) => void;
  onRemoveLikePress: (trackId: string) => void;
};

export const BaseLayoutContext = createContext<BaseLayoutContextValue>(
  {} as BaseLayoutContextValue,
);

export const BaseLayoutProvider = ({
  children,
  baseViewProps,
  noPlayingFooter,
}: BaseLayoutProviderProps) => {
  const [trackIdToPlay, setTrackIdToPlay] = useState<string>("");
  const [trackIdToSave, setTrackIdToSave] = useState<string>("");
  const [trackIdToRemove, setTrackIdToRemove] = useState<string>("");
  const playerData = useGetPlayback(noPlayingFooter !== true);
  const [repeatMode, setRepeatMode] = useState<RepeatState>(
    playerData.data?.repeat_state ?? "off",
  );
  const [shuffle, setShuffle] = useState<boolean>(
    playerData.data?.shuffle_state ?? false,
  );
  const startData = useStartPlayback({
    device_id: playerData.data?.device.id,
    id: trackIdToPlay,
  });
  const resumeData = useResumePlayback({
    device_id: playerData.data?.device.id,
  });
  const pauseData = usePausePlayback(playerData.data?.device.id);
  const repeatData = useSetRepeatMode(repeatMode);
  const shuffleData = useToggleShuffleState(shuffle);
  const saveSongsData = useSaveSongs([trackIdToSave]);
  const removeSongsData = useRemoveSongs([trackIdToRemove]);

  const isTrackPlaying = (trackId: string): boolean => {
    return playerData.data?.item.id === trackId;
  };

  const onSongPress = (trackId: string): void => {
    if (trackId === playerData.data?.item.id) {
      onPlayClick();
    } else {
      setTrackIdToPlay(trackId);
    }
  };

  useEffect(() => {
    if (trackIdToPlay) {
      startData.reset();
      startData.trigger();
    }
  }, [trackIdToPlay]);

  const onPlayClick = () => {
    if (playerData.data?.is_playing) {
      pauseData.reset();
      pauseData.trigger();
    } else {
      resumeData.reset();
      resumeData.trigger();
    }
  };

  const onRemoveLikePress = (songId: string): void => {
    setTrackIdToRemove(songId);
  };

  const onSaveLikePress = (songId: string): void => {
    setTrackIdToSave(songId);
  };

  const onRepeatModePress = (): void => {
    let newRepeatMode: RepeatState = "off";
    if (repeatMode === "context") {
      newRepeatMode = "track";
    } else if (repeatMode === "off") {
      newRepeatMode = "context";
    }

    setRepeatMode(newRepeatMode);
  };

  const onShufflePress = (): void => {
    setShuffle((prev) => !prev);
  };

  useEffect(() => {
    if (trackIdToRemove) {
      removeSongsData.trigger();
    }
  }, [trackIdToRemove]);

  useEffect(() => {
    if (trackIdToSave) {
      saveSongsData.trigger();
    }
  }, [trackIdToSave]);

  useEffect(() => {
    if (playerData.data && repeatMode !== playerData.data.repeat_state) {
      repeatData.trigger();
    }
  }, [repeatMode]);

  useEffect(() => {
    if (playerData.data && shuffle !== playerData.data.shuffle_state) {
      shuffleData.trigger();
    }
  }, [shuffle]);

  return (
    <BaseLayoutContext.Provider
      value={{
        isPlaying: playerData.data?.is_playing ?? false,
        isTrackPlaying,
        onSongPress,
        onSaveLikePress,
        onRemoveLikePress,
      }}
    >
      <StatusBar style="dark" />

      <BaseLayout viewProps={baseViewProps}>
        {children}
        {noPlayingFooter !== true && playerData.data?.device && (
          <PlayingFooter
            songTitle={playerData.data.item.name}
            songArtistName={playerData.data.item.artists[0].name}
            songImageUrl={playerData.data.item.album.images[0].url}
            songDuration={playerData.data.item.duration_ms}
            songPlayingProgress={calculatePercent(
              playerData.data.item.duration_ms,
              playerData.data.progress_ms,
            )}
            currentPosition={playerData.data.progress_ms}
            playing={playerData.data?.is_playing}
            repeatState={playerData.data.repeat_state}
            shuffleState={playerData.data.shuffle_state}
            onPlayClick={onPlayClick}
            onRepeatPress={onRepeatModePress}
            onShufflePress={onShufflePress}
            onArrowClick={() => {}}
          />
        )}
      </BaseLayout>
    </BaseLayoutContext.Provider>
  );
};
