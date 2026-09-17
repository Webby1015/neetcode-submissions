class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const result:boolean = false;
        for (let i = 0; i < nums.length; i++){
            for (let j = i+1; j<nums.length; j++){
                if(nums[i]===nums[j]){
                    return true;
                }
            }
        }
        return false;
    }
}
