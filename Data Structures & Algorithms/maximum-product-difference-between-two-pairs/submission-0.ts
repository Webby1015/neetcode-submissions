class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums: number[]): number {
        let max_product = 0;
        let min_product = Infinity;
        for(let i=0;i<nums.length;i++){
            for(let j=i+1;j<nums.length;j++){
                if(max_product<=nums[i]*nums[j]){
                    max_product = nums[i]*nums[j]
                }
                if(min_product>=nums[i]*nums[j]){
                    min_product = nums[i]*nums[j]
                }
            }
        }
        return max_product - min_product;
    }
}
