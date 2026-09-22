class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote: string, magazine: string): boolean {
        const magazine_letters = magazine.split('')
        let possible = true;
        for(const i of ransomNote){
            let position = magazine_letters.indexOf(i)
            magazine_letters[position] = '_';
            if(position==-1){
                possible = false
                break
            }
        }
        return possible;
    }
}
