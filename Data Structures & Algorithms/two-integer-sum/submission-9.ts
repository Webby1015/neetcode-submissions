class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const sum_map = new Map<number, number>();
        for (let i = 0; i < nums.length; i++) {
            let required_num = target - nums[i];
            if (sum_map.has(required_num)) {
                return [i, sum_map.get(required_num)];
            } else {
                sum_map.set(nums[i], i);
            }
        }

        return [];
    }
}
