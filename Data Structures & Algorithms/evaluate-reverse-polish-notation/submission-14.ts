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
        return stack.pop();
    }

    eval(num1: number, num2: number, operation: string): number {
        if (operation === "+") return num1 + num2;
        if (operation === "-") return num1 - num2;
        if (operation === "*") return num1 * num2;
        return Math.trunc(num1 / num2);
    }
}

// class Solution {
//     /**
//      * @param {string[]} tokens
//      * @return {number}
//      */
//     evalRPN(tokens: string[]): number {
//         let operands_stack = [];
//         let res: number = null;
//         for (let i of tokens) {
//             if (i == "+" || i == "-" || i == "*" || i == "/") {
//                 if (res == null) {
//                     let a = operands_stack.pop();
//                     let b = operands_stack.pop();
//                     res = this.eval(b, a, i);
//                 } else {
//                     let b = operands_stack.pop();
//                     res = this.eval(res, b, i);
//                 }
//             } else {
//                 operands_stack.push(Number(i));
//             }
//             // console.log(operands_stack)
//         }
//         return res != null ? res : operands_stack[0];
//     }

//     eval(num1: number, num2: number, operation: string): number {
//         if (operation == "+") {
//             console.log(num1, operation, num2, "=", num1 + num2);
//             return num1 + num2;
//         } else if (operation == "-") {
//             console.log(num1, operation, num2, "=", num1 - num2);
//             return num1 - num2;
//         } else if (operation == "*") {
//             console.log(num1, operation, num2, "=", num1 * num2);
//             return num1 * num2;
//         } else {
//             console.log(num1, operation, num2, "=",num1 == 0 || num2 == 0?0: Math.trunc(num1 / num2));
//             if (num1 == 0 || num2 == 0) return 0;
//             return Math.trunc(num1 / num2);
//         }
//     }
// }

