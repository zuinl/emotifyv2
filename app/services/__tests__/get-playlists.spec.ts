import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetPlaylists } from "../get-playlists";

describe("service: useGetPlaylists", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() => useGetPlaylists());

    await waitFor(() => {
      expect(result.current.data?.items.length).toBeGreaterThan(0);
    });
  });
});
