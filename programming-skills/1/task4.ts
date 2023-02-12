function subtractProductAndSum(n: number): number {
  const { product, sum } = `${n}`.split('').reduce(
    (acc, curr) => {
      const currNum = Number(curr);
      return {
        product: acc.product * currNum,
        sum: acc.sum + currNum,
      };
    },
    { product: 1, sum: 0 }
  );
  return product - sum;
}

console.log(subtractProductAndSum(234));
