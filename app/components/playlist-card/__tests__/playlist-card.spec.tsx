import { render, screen } from "@testing-library/react-native";
import { PlaylistCard } from "../playlist-card";
import { getUserEvent } from "../../../tests/user-event";
import { PlaylistCardProps } from "../../../types/components/playlist-card";

describe("component: PlaylistCard", () => {
  const baseProps: PlaylistCardProps = {
    title: "Playlist Jest",
    totalTracks: 7,
    imageUrl: "someUrl",
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render playlist image", () => {
    render(<PlaylistCard {...baseProps} />);

    expect(screen.getByTestId("playlist-image")).toBeOnTheScreen();
  });

  it("should render playlist title", () => {
    render(<PlaylistCard {...baseProps} />);

    expect(screen.getByTestId("playlist-title")).toHaveTextContent(
      baseProps.title,
    );
  });

  it("should render playlist length", () => {
    render(<PlaylistCard {...baseProps} />);

    expect(screen.getByTestId("playlist-length")).toHaveTextContent(
      `${baseProps.totalTracks} faixas`,
    );
  });

  it("should invoke onPress callback", async () => {
    render(<PlaylistCard {...baseProps} />);

    const playlistButton = screen.getByTestId("playlist-card-button");
    expect(playlistButton).toBeOnTheScreen();

    const user = getUserEvent();
    await user.press(playlistButton);
    expect(baseProps.onPress).toHaveBeenCalledTimes(1);
  });
});
