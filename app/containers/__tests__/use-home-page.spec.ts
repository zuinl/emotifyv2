import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useHomePage } from "../use-home-page";
import GetPlaylistsMock from "@tests/mocks/get-playlists.json"

describe("container: useHomePage", () => {
  // it("should change tab", async () => {
  //   const { result } = renderHook(() => useHomePage());

  //   expect(result.current.tab).toBe("now");

  //   act(() => {
  //     result.current.onTabChange("playlists");
  //   });

  //   await waitFor(() => {
  //     expect(result.current.tab).toBe("playlists");
  //   });
  // });

  it("should load playlists", async () => {
    const { result } = renderHook(() => useHomePage());

    await waitFor(() => {
      expect(result.current.playlists.length).toBe(GetPlaylistsMock.items.length);
    });
  });
});
