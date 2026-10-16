class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        this.selectionSort(nums)
    }
    selectionSort(nums:number[]){
        for(let i=0;i<nums.length;i++){
            let lowest = nums[i]
            let lowest_index = i
            for(let j=i+1;j<nums.length;j++){
                if(nums[j]<=lowest){
                    lowest = nums[j]
                    lowest_index = j
                }
            }
            nums.splice(lowest_index,1)
            nums.splice(i,0,lowest)
        }
    }
}
