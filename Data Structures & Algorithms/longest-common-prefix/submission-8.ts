class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if(strs.length==1) return strs[0]
        const assumed_common = strs.pop();
        let common_prefix = "";
        let assumed_common_index = 0;
        while(assumed_common_index<assumed_common.length){
            console.log(common_prefix)
            for(let i = 0;i<strs.length;i++){
                if(assumed_common[assumed_common_index]==strs[i][assumed_common_index]) continue
                else return common_prefix;
            }
            common_prefix+=assumed_common[assumed_common_index]
            assumed_common_index++
        }
        return common_prefix
    }
}
