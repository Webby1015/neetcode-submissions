class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];
        for (let i of tokens) {
            if (["+", "-", "*", "/"].includes(i)) {
                let b = stack.pop()!;
                let a = stack.pop()!;
                stack.push(this.eval(a, b, i));
            } else {
                stack.push(Number(i));
            }
        }
        return stack[0];
    }

    eval(num1: number, num2: number, operation: string): number {
        if (operation === "+") return num1 + num2;
        if (operation === "-") return num1 - num2;
        if (operation === "*") return num1 * num2;
        return Math.trunc(num1 / num2);
    }
}
