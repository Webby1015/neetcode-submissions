class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // if (s.length % 2 !== 0) {
        //     return false;
        // }
        let stack = [];

        const parenthesis_map = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        // const inv_parenthesis_map = {
        //     "(": ")",
        //     "[": "]",
        //     "{": "}",
        // };
        for (const i of s) {
            if(stack.length && stack[stack.length-1]==parenthesis_map[i]){
                stack.pop()
                // console.log('pop',stack)
            }else{
                stack.push(i)
                // console.log('push',stack)
            }
        }

        return stack.length == 0;
    }
}
