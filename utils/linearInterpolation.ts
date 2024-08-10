type Pair = [number, number];

export default function linearInterpolation(
  p1: Pair,
  p2: Pair,
  ...rest: Pair[]
): (value: number) => number;
export default function linearInterpolation(...pairs: Pair[]) {
  if (pairs.length < 2) {
    throw new Error("At least two pairs are required for interpolation.");
  }

  // Sort pairs based on the original values (first in the pair)
  pairs.sort((a, b) => a[0] - b[0]);

  return function (value: number): number {
    // Handle cases where the value is outside the range of the pairs
    if (value <= pairs[0][0]) {
      // Extrapolate linearly below the smallest pair
      const [x1, y1] = pairs[0];
      const [x2, y2] = pairs[1];
      return y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
    }

    if (value >= pairs[pairs.length - 1][0]) {
      // Extrapolate linearly above the largest pair
      const [x1, y1] = pairs[pairs.length - 2];
      const [x2, y2] = pairs[pairs.length - 1];
      return y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
    }

    // Find the two pairs that the value falls between
    for (let i = 0; i < pairs.length - 1; i++) {
      const [x1, y1] = pairs[i];
      const [x2, y2] = pairs[i + 1];

      if (value >= x1 && value <= x2) {
        // Perform linear interpolation
        return y1 + ((y2 - y1) / (x2 - x1)) * (value - x1);
      }
    }

    // In case of an unexpected situation (shouldn't happen)
    throw new Error("Interpolation failed.");
  };
}
