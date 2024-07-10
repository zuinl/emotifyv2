import { act, renderHook, waitFor } from "@testing-library/react-native";
import { usePausePlayback } from "../pause-playback";

describe("service: usePausePlayback", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() => usePausePlayback());

    act(() => {
      result.current.trigger();
    });

    await waitFor(() => {
      expect(result.current.data).toBeGreaterThanOrEqual(200);
    });
  });
});
