const countOdds = (low: number, high: number): number => {
  if(low % 2 !== 0 && high % 2 !== 0)
    return 2 + Math.floor((high - low - 1) / 2)
  else if (low % 2 === 0 && high % 2 === 0)
    return Math.ceil((high - low - 1) / 2)
  else return 1 + ((high - low - 1) / 2)
};

console.log(countOdds(2,14))
