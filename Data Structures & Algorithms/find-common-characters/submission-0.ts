class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words: string[]): string[] {
        let common: string[] = [];
        let first_word = words[0];
        for (const i of first_word) {
            let is_common = true;
            for(let j = 1; j<words.length ; j++){
                if(!words[j].includes(i)){
                    is_common = false;
                    let index=words[j].indexOf(i)
                    break
                }
                words[j]=words[j].replace(i,'_')
                // console.log(words[j])
            }
            if(is_common){
                common.push(i)
            }
        }

        return common;
    }
}
