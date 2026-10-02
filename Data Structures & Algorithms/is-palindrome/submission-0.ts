class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let length = s.length
        let res = true
        for(let i = 0; i<Math.ceil(length/2);i++){
            if(s[i]!=s[length-1-i]) return false
        }
        return res
    }

}
