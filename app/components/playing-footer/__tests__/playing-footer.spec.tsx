import { render, screen } from "@testing-library/react-native";
import { PlayingFooter } from "../playing-footer";
import { PlayingFooterProps } from "../../../types/components/playing-footer";
import { getUserEvent } from "../../../tests/user-event";

describe("component: PlayingFooter", () => {
  const baseProps: PlayingFooterProps = {
    songTitle: "",
    songArtistName: "",
    songDuration: 1000,
    currentPosition: 500,
    songPlayingProgress: 50,
    songImageUrl: "testUrl",
    playing: false,
    onArrowClick: jest.fn(),
    onPlayClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  })

  it("should render current song image", () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    expect(screen.getByTestId("song-image")).toBeOnTheScreen();
  });

  it("should render song title in the right place", () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    expect(screen.getByTestId("song-title")).toHaveTextContent(baseProps.songTitle);
  });
  
  it("should render artist name in the right place", () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    expect(screen.getByTestId("artist-name")).toHaveTextContent(baseProps.songArtistName);
  });

  /* TODO: find a better way to validate icon name */
  it("should render correct icon according to playback state - playing is false", () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    expect(screen.getByTestId("play-pause-icon")).toBeOnTheScreen();
  });

  it("should render correct icon according to playback state - playing is true", () => {
    render(
      <PlayingFooter {...baseProps} playing />,
    );

    expect(screen.getByTestId("play-pause-icon")).toBeOnTheScreen();
  });
  /*  */

  it("should invoke onPlayClick callback", async () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    const user = getUserEvent();
    await user.press(screen.getByTestId("play-pause-button"));

    expect(baseProps.onPlayClick).toHaveBeenCalledTimes(1);
    expect(baseProps.onArrowClick).toHaveBeenCalledTimes(0);
  });
  
  it("should invoke onArrowClick callback", async () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    const user = getUserEvent();
    await user.press(screen.getByTestId("expand-button"));

    expect(baseProps.onPlayClick).toHaveBeenCalledTimes(0);
    expect(baseProps.onArrowClick).toHaveBeenCalledTimes(1);
  });
});
