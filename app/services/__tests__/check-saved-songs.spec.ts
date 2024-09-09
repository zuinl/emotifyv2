import { renderHook, waitFor } from "@testing-library/react-native";
import { useCheckedSavedSongs } from "../check-saved-songs";

describe("service: useCheckedSavedSongs", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() => useCheckedSavedSongs(["1", "2"]));

    await waitFor(() => {
      expect(result.current.data).toStrictEqual([true, false]);
    });
  });
});
