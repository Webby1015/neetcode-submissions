class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length == 1) return strs[0]
        let first_element = strs.pop();
        let common_prefix = "";
        let prefix_interator = 0;
        // console.log(strs)
        while (prefix_interator < first_element.length) {
            let current_prefix = first_element[prefix_interator]
            for (let i = 0; i < strs.length; i++) {
                // console.log(current_prefix==strs[i],current_prefix,strs[i])
                if(current_prefix==strs[i][prefix_interator]){
                    continue
                }
                else{
                    current_prefix = ""
                    break
                }
            }
            if(current_prefix==""){
                break
            }
            common_prefix+=current_prefix
            prefix_interator++
        }
        return common_prefix
    }
}
