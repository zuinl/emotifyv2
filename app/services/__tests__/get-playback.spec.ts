import { renderHook, waitFor } from "@testing-library/react-native";
import { useGetPlayback } from "../get-playback";

describe("service: useGetPlayback", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() => useGetPlayback(true));

    await waitFor(() => {
      expect(result.current.data?.device).toBeDefined();
    });
  });

  it("should NOT request", async () => {
    const { result } = renderHook(() => useGetPlayback(false));

    await waitFor(() => {
      expect(result.current.data).toBeUndefined();
    });
  });
});
