class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words: string[], chars: string): number {
        let good_count = 0;
        let chars_arr = chars.split('')
        for(const i of words){
            let check = true;
            console.log(i)
            let check_against = structuredClone(chars_arr)
            for(const j of i){
                
                if(check_against.includes(j)==false){
                    check = false 
                    break
                }
                // check_against = check_against.map(x => x === j ? '_' : x);
                let replace_for = check_against.indexOf(j)
                check_against[replace_for]='_'
                console.log(check_against)
            }
            console.log(check)
            if(check){
                // check_against.replace()
                good_count+=i.length
            }

        }

        return good_count;
    }
}
