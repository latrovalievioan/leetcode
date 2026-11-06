function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0   
    let currentSeq = 0

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 1) continue


        currentSeq++

        if(!nums[i + 1]) {
            max = Math.max(max, currentSeq)
            currentSeq = 0
        }
    }

    return max
};

console.log(findMaxConsecutiveOnes([0, 1, 1, 1]))
