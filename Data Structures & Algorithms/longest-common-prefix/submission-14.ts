class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    // longestCommonPrefix(strs: string[]): string {
    //     if(strs.length == 1) return strs[0]
    //     const common = strs.pop()
    //     let common_prefix = ""
    //     let i = 0
    //     while(i<common.length){
    //         for(let str of strs){
    //             if(common[i]==str[i]) continue
    //             else return common_prefix
    //         }
    //         common_prefix += common[i]
    //         i++
    //     }
    //     return common_prefix
    // }

    longestCommonPrefix(strs: string[]): string{
        if(strs.length == 1) return strs[0]

        let prefix = strs[0]
        
        for(let i = 1; i< strs.length; i++){
            let j = 0;
            while(j< Math.min(strs[i].length,prefix.length)){
                if(prefix[j]!=strs[i][j]) break
                j++
            }
            prefix = prefix.slice(0,j)
        }

        return prefix;
    }
}