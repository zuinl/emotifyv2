import { act, renderHook, waitFor } from "@testing-library/react-native";
import { useResumePlayback } from "../resume-playback";

describe("service: useResumePlayback", () => {
  it("should return successfully response", async () => {
    const { result } = renderHook(() =>
      useResumePlayback({ device_id: "123" }),
    );

    act(() => {
      result.current.trigger();
    });

    await waitFor(() => {
      expect(result.current.data).toBeGreaterThanOrEqual(200);
    });
  });

  it("should return successfully response - no device_id", async () => {
    const { result } = renderHook(() => useResumePlayback({}));

    act(() => {
      result.current.trigger();
    });

    await waitFor(() => {
      expect(result.current.data).toBeGreaterThanOrEqual(200);
    });
  });
});
