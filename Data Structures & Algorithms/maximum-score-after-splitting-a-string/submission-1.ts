class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s: string): number {
        let max = 0
        for (let i = 1; i < s.length; i++) {
            let zero_count = 0;
            let one_count = 0;
            for (let first = 0; first < i; first++) {
                if (+s[first] == 0) {
                    zero_count++;
                }
            }
            for (let second = i; second < s.length; second++) {
                if (+s[second] == 1) {
                    one_count++;
                }
            }
            if((one_count+zero_count)>=max){
                max = one_count+zero_count
            }
        }
        return max;
    }
}
