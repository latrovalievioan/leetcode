function isHappy(n: number): boolean {
  const visited = new Set<number>();

  let is = false;

  const sumDigits = (n: number): void => {
    const digits = `${n}`.split('').map(Number);
    const sum = digits.reduce((acc, curr) => acc + curr ** 2, 0);
    if (sum === 1) {
      is = true;
      return;
    } else if (visited.has(sum)) {
      is = false;
      return;
    }
    visited.add(sum);
    sumDigits(sum);
  };

  sumDigits(n);

  return is;
}

console.log(isHappy(19));
