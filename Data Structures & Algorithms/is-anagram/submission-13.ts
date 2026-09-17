class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // console.log(s.split("").sort(),t.split("").sort())
        return s.split("").sort().join("") == t.split("").sort().join("");
    }
}
