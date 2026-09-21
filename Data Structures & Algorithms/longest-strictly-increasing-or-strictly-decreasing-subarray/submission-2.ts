class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums: number[]): number {
        let max_increasing:number = 1;
        let max_decreasing:number = 1;
        let increasing:number = 1;
        let decreasing:number = 1;
        for(let i = 1 ; i<nums.length;i++){
            if(nums[i-1]-nums[i]>0){
                decreasing++
                increasing=1
            }
            else if(nums[i-1]-nums[i]<0){
                increasing++
                decreasing=1
            }
            else{
                increasing=1
                decreasing=1
            }
            max_increasing = max_increasing <= increasing ? increasing : max_increasing

            max_decreasing = max_decreasing <= decreasing ? decreasing : max_decreasing
        }
        
        return max_increasing > max_decreasing?max_increasing:max_decreasing;
    }
}
