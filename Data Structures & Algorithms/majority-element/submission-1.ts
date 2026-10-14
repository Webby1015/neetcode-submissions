class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        if(nums.length==1) return nums[0]
        const map = new Map<number, number>();
        const threshold = Math.floor(nums.length / 2);
        for (let i of nums) {
            if (map.has(i)) {
                if (map.get(i) + 1 > threshold) return i;
                map.set(i, map.get(i) + 1);
            } else {
                map.set(i, 1);
            }
        }
    }
}
