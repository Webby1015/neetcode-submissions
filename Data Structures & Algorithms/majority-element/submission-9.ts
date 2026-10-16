class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        const map = new Map<number, number>();
        const threshold = Math.floor(nums.length / 2);
        for (let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                if (map.get(nums[i]) >= threshold) return nums[i];
                map.set(nums[i], map.get(nums[i]) + 1);
            } else map.set(nums[i], 1);
        }
    }
}
