class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const cleanString = s
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .toLowerCase()
            .split(" ")
            .join("");
        for (let i = 0; i < cleanString.length / 2; i++) {
            if (cleanString[i] != cleanString[cleanString.length - i - 1]) return false;
        }
        return true;
    }
}
