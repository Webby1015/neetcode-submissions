class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map:Map<number,number> = new Map();
        for(let i=0;i<nums.length;i++){
            if(map.has(nums[i])) return [i,map.get(nums[i])]
            else map.set(target-nums[i],i)
        }
    }
}
