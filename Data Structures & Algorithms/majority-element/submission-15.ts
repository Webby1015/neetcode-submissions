class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // majorityElement(nums: number[]): number {
    //     let n = nums.length;
    //     for (let num of nums) {
    //         let count = nums.reduce(
    //             (acc, val) => acc + (val === num ? 1 : 0),
    //             0,
    //         );
    //         if (count > Math.floor(n / 2)) {
    //             return num;
    //         }
    //     }
    //     return -1;
    // }

    majorityElement(nums: number[]): number {
        if (nums.length === 1) return nums[0];
        let count = 0;
        const threshold = Math.floor(nums.length / 2);
        nums.sort((a,b)=>a-b)
        for(let i = 1;i<nums.length;i++){
            if(nums[i]==nums[i-1]) count++
            if(count >=threshold) return nums[i]
        }
    }

    // majorityElement(nums: number[]): number {
    //     if (nums.length === 1) return nums[0];
    //     const map = new Map<number, number>();
    //     const threshold = Math.floor(nums.length / 2);
    //     for (let i = 0; i < nums.length; i++) {
    //         if (map.has(nums[i])) {
    //             if (map.get(nums[i]) >= threshold) return nums[i];
    //             map.set(nums[i], map.get(nums[i]) + 1);
    //         } else map.set(nums[i], 1);
    //     }
    // }
}