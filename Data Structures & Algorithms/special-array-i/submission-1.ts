class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums: number[]): boolean {
        for(let i = 0;i<nums.length-1;i++){
            // console.log(nums[i],nums[i+1],(nums[i]+nums[i+1])%2==0)
            if((nums[i]+nums[i+1])%2===0){
                return false;
            }
        }
        return true;
    }
}
