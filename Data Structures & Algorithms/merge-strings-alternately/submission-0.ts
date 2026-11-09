class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let i:number = 0;
        let j:number = 0;
        let res:string = '';
        while(i<word1.length || j<word2.length){
            if(i<word1.length) res+=word1[i]
            if(j<word2.length) res+=word2[j]
            i++,j++
        }
        return res;
    }
}
