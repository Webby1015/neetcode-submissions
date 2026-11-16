class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0);
        const stack: number[] = []; // stores indices

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                const prevIndex = stack.pop()!;
                res[prevIndex] = i - prevIndex;
            }
            stack.push(i);
        }

        return res;
    }
}
