class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let char_length = Infinity
        if(strs.length==1){
            return strs[0]
        }
        for(let i=1;i<strs.length;i++){
            if(strs[i].length<char_length){
                char_length = strs[i].length
            }
        }
        let prefix = ""
        for(let i=0;i<char_length;i++){
            let letter = strs[0][i]
            for(let j=1;j<strs.length;j++){
                if(letter!=strs[j][i]){
                    letter = ""
                    break
                }
            }
            if(letter == ""){
                break
            }
            prefix += letter
            // console.log("break>>>",prefix)
        }

        return prefix;
    }
}
