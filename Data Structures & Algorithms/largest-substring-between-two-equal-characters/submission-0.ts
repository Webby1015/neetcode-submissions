class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s: string): number {
        let max = 0;
        for(let i = 0 ; i<s.length;i++){
            for(let j =i+1; j<s.length; j++){
                if(s[i]==s[j] && max<=j-i){
                    max=j-i
                }
            }
        }
        return max-1;
    }
}
