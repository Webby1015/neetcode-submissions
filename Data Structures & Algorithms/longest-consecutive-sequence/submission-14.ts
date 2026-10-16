class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return 1;
        let c = 1;
        let max = 1;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] == 1) c++;
            else if (nums[i + 1] - nums[i] == 0) continue;
            else if(nums[i + 1] - nums[i] > 1 ) c = 1;
            if(c>=max) max = c;
        }
        return max;
    }
}
