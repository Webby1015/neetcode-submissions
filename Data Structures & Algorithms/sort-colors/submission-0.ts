class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        this.bubbleSort(nums)
    }

    bubbleSort(nums) {
        let pass = 0;
        while (pass < nums.length) {
            for (let i = 0; i < nums.length - 1; i++) {
                let current = nums[i];
                if (nums[i] > nums[i + 1]){
                    nums[i] = nums[i + 1]
                    nums[i + 1] = current;
                } 
            }
            pass++;
        }
    }
}
