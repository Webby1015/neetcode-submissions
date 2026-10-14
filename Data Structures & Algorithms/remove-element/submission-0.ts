class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let res = nums.length
        for(let i =0;i<nums.length;i++){
            if(nums[i]==val){
                nums[i] = 51
                res--
            }
        }
        nums.sort((a,b)=>a-b)
        return res;
    }
}
