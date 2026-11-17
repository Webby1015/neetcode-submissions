class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    // removeElement(nums: number[], val: number): number {
    //     let k = 0;
    //     for(let i = 0; i<nums.length ; i++){
    //          if(nums[i]==val) nums[i] = 51
    //          else k++
    //     }
    //     nums.sort((a,b)=>a-b)
    //     return k
    // }
    // removeElement(nums: number[], val: number): number {
    //     let k = 0;
    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] !== val) {
    //             nums[k] = nums[i]
    //             k++
    //         }
    //     }
    //     return k;
    // }
    removeElement(nums: number[], val: number): number {
        let i = 0;
        let n = nums.length;
        while (i < n) {
            if (nums[i] == val) {
                nums[i] = nums[n-1];
                n--;
            } else {
                i++;
            }
        }
        return n;
    }
}
