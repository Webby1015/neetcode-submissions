class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let pair_map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            if (pair_map.get(nums[i])!==undefined) {
                return [i, pair_map.get(nums[i])];
            } else {
                let remaining = target - nums[i];
                pair_map.set(remaining, i);
            }
            // console.log(pair_map)
        }
        return []
    }
}
