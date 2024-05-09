import { StatusBar } from "expo-status-bar";
import { createContext } from "react";
import { BaseLayoutProviderProps } from "@tps/contexts/base-layout.context";
import { BaseLayout } from "@components/base-layout/base-layout";
import { PlayingFooter } from "@components/playing-footer/playing-footer";
import { welcomeBgUrl } from "../constants/images";

const BaseLayoutContext = createContext(null);

export const BaseLayoutProvider = ({
  children,
  baseViewProps,
  noPlayingFooter,
}: BaseLayoutProviderProps) => {
  return (
    <BaseLayoutContext.Provider value={null}>
      <StatusBar style="dark" />

      <BaseLayout viewProps={baseViewProps}>
        {children}
        {noPlayingFooter !== true && (
          <PlayingFooter
            songTitle="bad guy"
            songArtistName="Billie Eilish"
            songImageUrl={welcomeBgUrl}
            songDuration={300}
            songPlayingProgress={50}
            currentPosition={150}
            playing
            onPlayClick={() => {}}
            onArrowClick={() => {}}
          />
        )}
      </BaseLayout>
    </BaseLayoutContext.Provider>
  );
};
