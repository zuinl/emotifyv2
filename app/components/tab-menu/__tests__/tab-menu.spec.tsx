import { render, screen } from "@testing-library/react-native";
import { TabMenu } from "../tab-menu";
import { TabMenuProps } from "../../../types/components/tab-menu";
import { getUserEvent } from "../../../tests/user-event";

describe("component: TabMenu", () => {
  const baseProps: TabMenuProps = {
    activeTab: "now",
    onTabPress: jest.fn(),
  };

  it("should render tabs", () => {
    render(<TabMenu {...baseProps} />);

    expect(screen.getByText("Agora")).toBeOnTheScreen();
    expect(screen.getByText("Playlists")).toBeOnTheScreen();
    expect(screen.getByText("Artistas")).toBeOnTheScreen();
  });

  it("should invoke onTabPress callback according to pressed tab", async () => {
    render(<TabMenu {...baseProps} />);

    const user = getUserEvent();

    const nowTab = screen.getByText("Agora");
    await user.press(nowTab);
    expect(baseProps.onTabPress).toHaveBeenCalledWith("now");

    const playlistsTab = screen.getByText("Playlists");
    await user.press(playlistsTab);
    expect(baseProps.onTabPress).toHaveBeenCalledWith("playlists");

    const artistsTab = screen.getByText("Artistas");
    await user.press(artistsTab);
    expect(baseProps.onTabPress).toHaveBeenCalledWith("artists");
  });
});
