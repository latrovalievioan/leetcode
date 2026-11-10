const operators = new Set(["+", "-", "*", "/"])

function evalRPN(tokens: string[]): number {
    const stack: number[] = []

    for(let i = 0; i < tokens.length; i++) {
        if(operators.has(tokens[i])) {
            const b = stack.pop()!
            const a = stack.pop()!

            switch (tokens[i]) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(Math.trunc(a / b)); break;
            }

            continue
        }

        stack.push(Number(tokens[i]))
    }

    return stack.pop()!
};

console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))
