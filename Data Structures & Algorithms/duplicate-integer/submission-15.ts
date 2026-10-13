class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let count_map = new Map()
        for(let i of nums){
            if(count_map.get(i)){
                return true;
            }else(
                count_map.set(i,1)
            )
        }
        return false;
    }
}
