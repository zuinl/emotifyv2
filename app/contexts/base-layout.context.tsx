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

type BaseLayoutContextValue = {
  isPlaying: boolean;
  isTrackPlaying: (trackId: string) => boolean;
  onSongPress: (trackId: string) => void;
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
  const playerData = useGetPlayback(noPlayingFooter !== true);
  const startData = useStartPlayback({
    device_id: playerData.data?.device.id,
    id: trackIdToPlay,
  });
  const resumeData = useResumePlayback({
    device_id: playerData.data?.device.id,
  });
  const pauseData = usePausePlayback(playerData.data?.device.id);

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

  return (
    <BaseLayoutContext.Provider
      value={{
        isPlaying: playerData.data?.is_playing ?? false,
        isTrackPlaying,
        onSongPress,
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
            onPlayClick={onPlayClick}
            onArrowClick={() => {}}
          />
        )}
      </BaseLayout>
    </BaseLayoutContext.Provider>
  );
};
