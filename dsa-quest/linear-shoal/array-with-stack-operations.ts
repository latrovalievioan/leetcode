function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];

    for (let i = 0, j = 1; i < target.length && j <= n; j++) {
        const curr = target[i];

        console.log({i, j, curr})

        if (curr === j) {
            result.push("Push");

            i++
            continue;
        }

        result.push("Push");
        result.push('Pop');
    }

    return result;
}

console.log(buildArray([1, 3], 3));

// Input: target = [1,3], n = 3
// Output: ["Push","Push","Pop","Push"]
// Explanation: Initially the stack s is empty. The last element is the top of the stack.
// Read 1 from the stream and push it to the stack. s = [1].
// Read 2 from the stream and push it to the stack. s = [1,2].
// Pop the integer on the top of the stack. s = [1].
// Read 3 from the stream and push it to the stack. s = [1,3].
