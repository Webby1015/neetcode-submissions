class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length==1){
            return [strs]
        }
        let map = {};

        for(let i of strs){
            const sorted_i = i.split("").sort().join()
            if(map[sorted_i]){
                map[sorted_i] = [...map[sorted_i],i]
            }else{
                map[sorted_i] = [i]
            }
        }
        // console.log()

        return Object.values(map)
    }
}
