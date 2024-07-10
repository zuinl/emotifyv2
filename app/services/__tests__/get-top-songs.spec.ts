import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetTopSongs } from "../get-top-songs";

describe("service: useGetTopSongs", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() => useGetTopSongs());

    await waitFor(() => {
      expect(result.current.data?.items.length).toBeGreaterThan(0);
    });
  });
});
