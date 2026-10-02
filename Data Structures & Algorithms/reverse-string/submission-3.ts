class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        let length = s.length
        for(let i =0;i<Math.ceil(length/2);i++){   
            let temp = s[i]
            s[i]=s[length-1-i]
            s[length-1-i] = temp
        }
    }
}
