class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s: string): number {
        let res = -1;
        let count: Record<string, number> = {};
        for (const i of s) {
            count[i] = (count[i] || 0) + 1;
        }

        for (const i of Object.keys(count)) {
            console.log(i, count[i]);
            if (count[i] == 1) {
                return s.indexOf(i);
            }
        }

        return res;
    }
}
