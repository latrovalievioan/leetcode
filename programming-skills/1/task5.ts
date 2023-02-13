function largestPerimeter(nums: number[]): number {
  const sorted = nums.sort((a, b) => a - b);
  let largest = 0;

  for (let i = sorted.length - 1; i >= 2; i--) {
    const take3 = [sorted[i], sorted[i - 1], sorted[i - 2]];
    const perimeter = take3.reduce((a, b) => a + b);
    if (
      perimeter / 2 <= sorted[i] ||
      perimeter / 2 <= sorted[i - 1] ||
      perimeter / 2 <= sorted[i - 2]
    )
      continue;
    largest = perimeter;
    break;
  }
  return largest;
}

console.log(largestPerimeter([3, 2, 3, 4]));
