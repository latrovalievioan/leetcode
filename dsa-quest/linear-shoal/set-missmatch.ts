function findErrorNums(nums: number[]): number[] {
    const map: Map<number, number> = new Map()

    for(let i = 1; i <= nums.length; i++) {
        map.set(i, 0)
    }

    for(let i = 0; i < nums.length; i++) {
        const curr = nums[i]

        const mapVal = map.get(curr)

        map.set(curr, (mapVal ?? 0) + 1) 
    }

    let missing = 0
    let double = 0

    for(const [k ,v] of map.entries()) {
        if(v === 0) {
            missing = k
        }

        if(v === 2) {
            double = k
        }
    }

    return [double, missing]
};

findErrorNums([3,2,3,4,6,5])

