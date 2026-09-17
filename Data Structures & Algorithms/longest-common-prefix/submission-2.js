class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let shortest  = Infinity
        for(let i of strs){
            if(i.length < shortest){
                shortest = i.length
            }
        }
        let prefix = ""
        for(let i = 0; i<shortest;i++){
            let letter = strs[0][i]
            for(let j = 1;j<strs.length ;j++){
                if(strs[j][i]!==letter){
                    letter = ""
                    break
                }
            }
            if(letter==""){
                break
            }
            prefix += letter
        }
        return prefix;
    }
}
