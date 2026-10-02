class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        for(let i =0;i<Math.ceil(s.length/2);i++){   
            let temp = s[i]
            s[i]=s[s.length-1-i]
            s[s.length-1-i] = temp
        }
    }
}
