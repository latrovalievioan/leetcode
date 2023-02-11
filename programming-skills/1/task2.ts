const average = (salary: number[]): number => {
  let min = Infinity;
  let max = 0;
  return (
    (salary.reduce((acc, curr) => {
      if (min > curr) min = curr;
      if (max < curr) max = curr;
      return acc + curr;
    }, 0) -
      min -
      max) /
    (salary.length - 2)
  );
};

console.log(average([4000, 3000, 1000, 2000]));
