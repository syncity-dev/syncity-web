export const range = (startOrEnd: number, end?: number, step = 1): number[] => {
  const start = end === undefined ? 0 : startOrEnd;
  const stop = end === undefined ? startOrEnd : end;

  return Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
};
