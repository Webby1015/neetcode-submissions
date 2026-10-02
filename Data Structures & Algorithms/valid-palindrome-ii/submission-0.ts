class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    replaceChar(origString, replaceChar, index) {
        let firstPart = origString.substr(0, index);
        let lastPart = origString.substr(index + 1);

        let newString = firstPart + replaceChar + lastPart;
        return newString;
    }

    isPalindrome(s: string): boolean {
        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let length = s.length;
        let res = true;
        for (let i = 0; i < Math.ceil(length / 2); i++) {
            if (s[i] != s[length - 1 - i]) return false;
        }
        return res;
    }

    validPalindrome(s: string): boolean {
        let res = false;
        for (let i = 0; i < s.length; i++) {
            let temp = s;
            temp = this.replaceChar(temp,'_',i)
            if(this.isPalindrome(temp)){
                return true
            }
        }
        return false
    }
}
