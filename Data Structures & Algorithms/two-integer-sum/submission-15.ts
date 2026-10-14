class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const pair_map = new Map<number,number>();
        for(let i = 0;i<nums.length;i++ ){
            if(pair_map.has(nums[i])) return [i,pair_map.get(nums[i])]
            else pair_map.set(target-nums[i],i)
        }
    }
}
