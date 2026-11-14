class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        // let ans = []
        // for(let i = 0;i<nums.length;i++){
        //     ans.push(nums[i])
        // }
        // for(let i = 0;i<nums.length;i++){
        //     ans.push(nums[i])
        // }

        // return ans;
        
        // let size = nums.length;
        // for(let i = 0;i<size;i++){
        //     nums.push(nums[i])
        // }
        // return nums;

        return [...nums,...nums];
    }
}
