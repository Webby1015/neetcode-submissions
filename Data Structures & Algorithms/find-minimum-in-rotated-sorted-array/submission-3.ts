class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // O(n)
    // findMin(nums: number[]): number {
    //     return Math.min(...nums)
    // }

    // findMin(nums: number[]): number {
    //     let left = 0;
    //     let right = nums.length - 1;
    //     let res = nums[0];

    //     while (left <= right) {
    //         console.log(left, right);
    //         if (nums[left] <= nums[right]) {
    //             res = Math.min(res, nums[left]);
    //             break;
    //         }

    //         let middle = left + Math.floor((right - left) / 2);
    //         res = Math.min(res, nums[middle]);

    //         if (nums[middle] >= nums[left]) {
    //             left = middle + 1;
    //         } else {
    //             right = middle - 1;
    //         }
    //     }
    //     return res;
    // }

    findMin(nums: number[]): number {
        let left = 0
        let right = nums.length - 1;
        while (left < right) {
            let middle = left + Math.floor((right - left) / 2);
            if (nums[middle] < nums[right]) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        return nums[left];
    }
}
