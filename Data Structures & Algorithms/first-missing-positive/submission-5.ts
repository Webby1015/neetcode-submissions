class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        const size = nums.length;
        for (let i = 0; i < size; i++) {
            if (nums[i] < 0) nums[i] = 0;
        }
        for (let i = 0; i < size; i++) {
            if (nums[i] != 0 && nums[i] <= size) {
                let num = Math.abs(nums[i]);
                // console.log(num);
                if (nums[num - 1] <= 0) nums[num - 1] = -Infinity;
                else nums[num - 1] = -nums[num - 1];
            }
        }
        // console.log(nums);
        for (let i = 1; i <= size; i++) {
            if (nums[i - 1] < 0) continue;
            else return i;
        }
        return size + 1;
    }
}
