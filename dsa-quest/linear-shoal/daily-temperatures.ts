function dailyTemperatures(temperatures: number[]): number[] {
    const result: number[] = new Array(temperatures.length).fill(0)
    const stack: number[] = []

    for(let i = 0; i < temperatures.length; i++) {
        let top = stack[stack.length - 1]

        while(top !== undefined && temperatures[top] < temperatures[i]) {
            stack.pop()

            result[top] = i - top

            top = stack[stack.length - 1]
        }

        stack.push(i)
    }

    return result
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
console.log(dailyTemperatures([30,40,50,60]))
console.log(dailyTemperatures([30,60,90]))
