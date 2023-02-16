const isHappy = (n: number, visited: Set<number> = new Set()): boolean => {
  const digits = `${n}`.split('').map(Number);
  const sum = digits.reduce((acc, curr) => acc + curr ** 2, 0);
  if (visited.has(sum)) return false;
  visited.add(sum);
  return sum === 1 || isHappy(sum, visited);
};

console.log(isHappy(19));
