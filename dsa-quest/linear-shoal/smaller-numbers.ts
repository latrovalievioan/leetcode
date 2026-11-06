function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sortedNums = nums.slice().sort((a,b) => a-b)

    const map: Map<number, number> = new Map()

    for(let i = 0; i < sortedNums.length; i++) {
        if(sortedNums[i] === sortedNums[i - 1]) continue
        map.set(sortedNums[i], i)
    }

    return nums.map(n => map.get(n))
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))
