class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words: string[]): string[] {
        let result:string[] = []
        for(let i = 0;i<words.length;i++){
            for(let j = 0;j<words.length;j++){
                let check = words[i].replace(words[j], "_").split('_').filter(this.isEmptyString)
                // console.log(words[i],words[j],(check.length > 0 && check[0]!=words[i])) 
                if(check.length > 0 && check[0]!=words[i]){
                    if(!result.includes(words[j])){
                        result.push(words[j])
                    }
                }
            }
        }
    
        return result;
    }

    isEmptyString(str){
        return str!=='';
    }

}
