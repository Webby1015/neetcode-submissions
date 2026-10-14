class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let k = nums.length
        for(let i=0;i<nums.length;i++){
            if(nums[i]==val) nums[i]=51,k--;
        }
        nums.sort((a,b)=>a-b)
        return k
    }
}
