class Solution {
    /**
     * Check if a character is alphanumeric
     * @param {char} char
     * @return {boolean}
     */
    isAlphanumeric(char: string): boolean {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            // console.log("-",left,right)
            while (left < right && !this.isAlphanumeric(s[left])) {
                left++;
            }
            while (left < right && !this.isAlphanumeric(s[right])) {
                right--;
            }
            if (s[left].toLowerCase() == s[right].toLowerCase()) {
                // console.log(s[left].toLowerCase(), s[right].toLowerCase());
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }
}
