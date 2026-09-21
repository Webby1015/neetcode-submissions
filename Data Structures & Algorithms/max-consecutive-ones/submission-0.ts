class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let max_consecutive = 0;
        let consecutive = 0;
        for(let i = 0;i<nums.length;i++){
            if(nums[i]===1){
                consecutive++
                if(consecutive>max_consecutive){
                    max_consecutive = consecutive
                }
            }else{
                consecutive=0
            }
        }
        return max_consecutive;
    }
}
