class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const pair = new Map<number,number>();
        for(let i=0;i<nums.length;i++){
            let remaining = target - nums[i];
            if(pair.has(nums[i])) return [i,pair.get(nums[i])]
            else pair.set(remaining,i)
        }
    }
}
