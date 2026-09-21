class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s: string): number {
        const count: Record<string, number> = {};
        let max_odd = 0
        let min_even = 100
        for (const char of s) {
            count[char] = (count[char] || 0) + 1;
        }
        for(const i of Object.values(count)){
            if(i%2==0){
                if(i<min_even){
                    min_even = i
                }
            }else{
                if(i>max_odd){
                    max_odd = i
                }
            }
        }
        return max_odd - min_even ;
    }
}
