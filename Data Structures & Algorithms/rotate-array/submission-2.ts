class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        while (k != 0) {
            this.shift(nums);
            k--;
        }
    }

    shift(nums: number[]): void {
        let size = nums.length;
        let temp = nums[size-1];
        for (let i = size-1 ; i >= 0; i--) {
            nums[i] = nums[i-1]
        }
        nums[0] = temp
        // console.log(nums);
    }
}
