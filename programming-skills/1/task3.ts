const input = 00000000000000000000000000001011;

function hammingWeight(n: number): number {
  return `${n.toString(2)}`.replace(/0/gi, '').length;
}

console.log(hammingWeight(input));
