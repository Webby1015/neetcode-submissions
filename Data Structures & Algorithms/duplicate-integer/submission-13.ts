class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let countMap = {}
        for(let i of nums){
            if(countMap[i]){
                return true;
            }else(
                countMap[i]=1
            )
        }
        return false;
    }
}
