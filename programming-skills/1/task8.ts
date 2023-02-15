function canMakeArithmeticProgression(arr: number[]): boolean {
  const sorted = arr.sort((a, b) => a - b);
  const step = sorted[1] - sorted[0];
  let hasProgression = true;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] !== step) {
      hasProgression = false;
    }
  }

  return hasProgression;
}

console.log(canMakeArithmeticProgression([3, 5, 1]));
