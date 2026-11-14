class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let sum_map = new Map;
        for(let i = 0;i<nums.length;i++){
            if(sum_map.has(nums[i])) return [i,sum_map.get(nums[i])]
            else{
                sum_map.set(target-nums[i],i)
            }
        }
    }
}
