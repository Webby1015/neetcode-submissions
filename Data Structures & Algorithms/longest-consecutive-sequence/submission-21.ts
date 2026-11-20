class Solution {
    // longestConsecutive(nums: number[]): number {
    //     let res = 0;
    //     const store = new Set<number>(nums);

    //     for (let num of nums) {
    //         let streak = 0,
    //             curr = num;
    //         while (store.has(curr)) {
    //             streak++;
    //             curr++;
    //         }
    //         res = Math.max(res, streak);
    //     }
    //     return res;
    // }


    // longestConsecutive(nums: number[]): number {
    //     if (nums.length === 0) {
    //         return 0;
    //     }
    //     nums.sort((a, b) => a - b);

    //     let res = 0,
    //         curr = nums[0],
    //         streak = 0,
    //         i = 0;

    //     while (i < nums.length) {
    //         if (curr !== nums[i]) {
    //             curr = nums[i];
    //             streak = 0;
    //         }
    //         while (i < nums.length && nums[i] === curr) {
    //             i++;
    //         }
    //         streak++;
    //         curr++;
    //         res = Math.max(res, streak);
    //     }
    //     return res;
    // }



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
            // else if (nums[i + 1] - nums[i] == 0) continue;
            else if(nums[i + 1] - nums[i] > 1 ) c = 1;
            if(c>=max) max = c;
        }
        return max;
    }



    
}