class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length == 1) return strs[0]
        let common = strs.pop()
        let common_prefix_index = 0;
        let common_prefix = ""
        while(common_prefix_index<common.length){
            for(let i = 0;i<strs.length;i++){
                if(common[common_prefix_index]==strs[i][common_prefix_index]) continue
                else return common_prefix
            }
            common_prefix += common[common_prefix_index]
            common_prefix_index++
        }
        return common_prefix
    }
}
