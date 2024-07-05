import { render } from "@testing-library/react-native";
import { BaseLayoutContext } from "../contexts/base-layout.context";
import { ReactNode } from "react";

/**
 *
 * @param component The component to be rendered within context
 * @param isPlaying [Optional] Indicates current playback state
 * @param isTrackPlaying [Optional] Function that indicates if the given track is currently playing
 * @param onSongPress [Optional] Callback to start/resume/play the given song
 */
export const renderComponentInContext = ({
  component,
  isPlaying = false,
  isTrackPlaying = jest.fn().mockReturnValue(false),
  onSongPress = jest.fn(),
}: {
  component: ReactNode;
  isPlaying?: boolean;
  isTrackPlaying?: () => boolean;
  onSongPress?: () => void;
}) => {
  render(
    <BaseLayoutContext.Provider
      value={{
        isPlaying,
        isTrackPlaying,
        onSongPress,
      }}
    >
      {component}
    </BaseLayoutContext.Provider>,
  );
};
