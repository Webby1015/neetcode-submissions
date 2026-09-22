class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed: string, words: string[]): number {
        let count = 0;
        for(const word of words){
            let check = true; 
            for(const letter of word){
                if(!allowed.includes(letter)){
                    check = false
                    break
                }
            }
            if (check){
                count++
            }
        }
        return count
    }
}
