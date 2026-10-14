class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length == 1) return strs[0]
        const common = strs.pop()
        let common_prefix = ""
        let i=0;
        while(i<common.length){
            for(let s of strs){
                console.log(common[i],s[i])
                if(common[i]==s[i]) continue
                else return common_prefix
            }
            common_prefix+=common[i]
            i++
        }
        return common_prefix
    }
}
