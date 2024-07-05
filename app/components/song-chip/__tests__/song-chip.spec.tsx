import { screen } from "@testing-library/react-native";
import { SongChip } from "../song-chip";
import { getUserEvent } from "../../../tests/user-event";
import { SongChipProps } from "../../../types/components/song-chip";
import { renderComponentInContext } from "../../../tests/base-layout.context.mock";

describe("component: SongChip", () => {
  const baseProps: SongChipProps = {
    id: "12345",
    title: "Jest Around The World",
    artist: "Jest",
    duration: "4m50s",
    liked: false,
    onToggleLike: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render song title", () => {
    renderComponentInContext({
      component: <SongChip {...baseProps} />,
    });

    expect(screen.getByTestId("song-title")).toHaveTextContent(baseProps.title);
  });

  it("should render artist name", () => {
    renderComponentInContext({
      component: <SongChip {...baseProps} />,
    });

    expect(screen.getByTestId("artist-name")).toHaveTextContent(
      baseProps.artist,
    );
  });

  it("should render song duration", () => {
    renderComponentInContext({
      component: <SongChip {...baseProps} />,
    });

    expect(screen.getByTestId("song-duration")).toHaveTextContent(
      baseProps.duration,
    );
  });

  it("should invoke onSongPress callback", async () => {
    const onSongPressFn = jest.fn();

    renderComponentInContext({
      component: <SongChip {...baseProps} />,
      onSongPress: onSongPressFn,
    });

    const songChipButton = screen.getByTestId("song-chip-button");
    expect(songChipButton).toBeOnTheScreen();

    const user = getUserEvent();
    await user.press(songChipButton);

    expect(onSongPressFn).toHaveBeenCalledTimes(1);
  });

  it("should invoke onSongPress callback - current song playing", async () => {
    const onSongPressFn = jest.fn();

    renderComponentInContext({
      component: <SongChip {...baseProps} />,
      isPlaying: true,
      isTrackPlaying: jest.fn().mockReturnValue(true),
      onSongPress: onSongPressFn,
    });

    const songChipButton = screen.getByTestId("song-chip-button");
    expect(songChipButton).toBeOnTheScreen();

    const user = getUserEvent();
    await user.press(songChipButton);

    expect(onSongPressFn).toHaveBeenCalledTimes(1);
  });

  it("should invoke onSongPress callback - playback paused on current song", async () => {
    const onSongPressFn = jest.fn();

    renderComponentInContext({
      component: <SongChip {...baseProps} liked />,
      isTrackPlaying: jest.fn().mockReturnValue(true),
      onSongPress: onSongPressFn,
    });

    const songChipButton = screen.getByTestId("song-chip-button");
    expect(songChipButton).toBeOnTheScreen();

    const user = getUserEvent();
    await user.press(songChipButton);

    expect(onSongPressFn).toHaveBeenCalledTimes(1);
  });

  it("should invoke onToggleLike callback", async () => {
    const onSongPressFn = jest.fn();

    renderComponentInContext({
      component: <SongChip {...baseProps} />,
    });

    const songLikeButton = screen.getByTestId("song-chip-like-button");
    expect(songLikeButton).toBeOnTheScreen();

    const user = getUserEvent();
    await user.press(songLikeButton);

    expect(baseProps.onToggleLike).toHaveBeenCalledTimes(1);
  });
});
