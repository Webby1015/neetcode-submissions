class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        this.selectionSort(nums);
        return nums;
    }

    selectionSort(nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            let lowest = nums[i];
            let lowest_index = i;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] <= lowest) {
                    lowest = nums[j];
                    lowest_index = j;
                }
            }
            nums.splice(lowest_index, 1);
            nums.splice(i, 0, lowest);
        }
    }
}
