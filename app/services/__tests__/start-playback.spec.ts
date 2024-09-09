import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useStartPlayback } from "../start-playback";

describe("service: useResumePlayback", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() =>
      useStartPlayback({ device_id: "123", id: "123" }),
    );

    act(() => {
      result.current.trigger();
    });

    await waitFor(() => {
      expect(result.current.data).toBeGreaterThanOrEqual(200);
    });
  });

  it("should return successfully response - no device_id", async () => {
    const { result } = renderHook(() => useStartPlayback({ id: "123" }));

    act(() => {
      result.current.trigger();
    });

    await waitFor(() => {
      expect(result.current.data).toBeGreaterThanOrEqual(200);
    });
  });
});
