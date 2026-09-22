class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words: string[]): boolean {
        const count: Record<string, number> = {};
        let res = true;
        for(const i of words){
            for(const j of i){
                count[j] = (count[j]||0)+1
            }
        }
        for(const i of Object.keys(count)){
            if(count[i]%words.length!==0){
                return false
            }
        }
        return true;
    }
}
