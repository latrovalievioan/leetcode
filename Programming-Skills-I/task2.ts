const average = (salary: number[]): number => {
  return salary.sort((a, b) => a - b).reduce((acc, curr, i, arr) => {
    console.log(acc);
    if(i === 0) return acc
    else if (i !== arr.length - 1) return acc + curr
    return acc / arr.length - 2
  }, 0)
};

console.log(average([4000,3000,1000,2000]));
