// function findDisappearedNumbers(nums: number[]): number[] {
//   nums.sort((a, b) => a - b);
//
//   const result: number[] = [];
//
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = nums[i - 1] + 1; j < nums[i]; j++) {
//       result.push(j);
//     }
//   }
//
//   if(nums[0] > 1) {
//     for(let j = 1; j < nums[0]; j++) {
//         result.push(j)
//     }
//   }
//
//   if (nums[nums.length - 1] !== nums.length) {
//     for (let j = nums[nums.length - 1]; j < nums.length; j++) {
//       result.push(j + 1);
//     }
//   }
//
//   return result;
// }

// function findDisappearedNumbers(nums: number[]): number[] {
//     const map = new Map<number, boolean>()
//
//     for(let i = 0; i < nums.length; i++) {
//         map.set(nums[i], true)
//
//         if(!map.has(i + 1)) {
//             map.set(i + 1, false)
//         }
//     }
//
//     const result: number[] = []
//
//     for(const [num, bool] of map) {
//         if(bool) continue
//
//         result.push(num)
//     }
//
//     return result
// }

function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const curr = Math.abs(nums[i]);

    nums[curr - 1] = -Math.abs(nums[curr - 1]);
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) continue;

    result.push(i + 1);
  }

  return result;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([2, 2]));
