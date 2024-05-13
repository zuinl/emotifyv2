/**
 *
 * @param duration_ms A duração em ms
 * @returns A duração no format MM:SS
 */
export const transformDuration = (duration_ms: number): string => {
  const secs = duration_ms / 1000;
  const restSecs = secs % 60;
  const minutes = (secs - restSecs) / 60;

  return `${minutes}:${restSecs <= 9 ? "0" : ""}${Math.ceil(restSecs)}`;
};
