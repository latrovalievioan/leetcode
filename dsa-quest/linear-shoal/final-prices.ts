function finalPricesBruteforce(prices: number[]): number[] {
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        prices[i] -= prices[j];
        break;
      }
    }
  }

  return prices;
}

function finalPrices(prices: number[]): number[] {
  const monotonicStack: number[] = [];

  for (let i = 0; i < prices.length; i++) {
    let top = monotonicStack[monotonicStack.length - 1]

    while(top !== undefined && prices[i] <= prices[top]) {
      prices[top] -= prices[i];

      monotonicStack.pop();
      top = monotonicStack[monotonicStack.length - 1]
    }

    monotonicStack.push(i);
  }

  return prices;
}

console.log(finalPricesBruteforce([8, 4, 6, 2, 3]));
console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPricesBruteforce([1, 2, 3, 4, 5]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPricesBruteforce([10, 1, 1, 6]));
console.log(finalPrices([10, 1, 1, 6]));
// console.log(finalPrices())
// console.log(finalPrices())
