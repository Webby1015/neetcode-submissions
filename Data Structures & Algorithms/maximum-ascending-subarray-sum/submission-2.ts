class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums: number[]): number {
        let max_sum = 0;
        let sum = 0;
        nums.push(101);
        for (let i = 0; i < nums.length - 1; i++) {
            sum += nums[i];
            max_sum = max_sum < sum ? sum : max_sum;
            if (nums[i] - nums[i + 1] >= 0) {
                sum = 0;
            }

            // console.log(nums[i], nums[i + 1], sum, max_sum);
        }

        return max_sum;
    }
}
