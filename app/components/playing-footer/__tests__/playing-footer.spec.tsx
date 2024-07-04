import { render, screen } from "@testing-library/react-native";
import { PlayingFooter } from "../playing-footer";
import { PlayingFooterProps } from "../../../types/components/playing-footer";

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

  it("should render current song image", async () => {
    render(
      <PlayingFooter {...baseProps} />,
    );

    expect(screen.getByTestId("song-image")).toBeOnTheScreen();
  });
});
