class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    check(nums: number[]): boolean {
        let min = 101;
        let start_index = -1
        let unrotate:number[]=[]
        for(let i = 0;i<nums.length;i++){
            if(nums[i]<min){
                min=nums[i];
                start_index = i
            }
        }
        // console.log(min,start_index)
        for(let i =0 ;i<nums.length;i++){
            unrotate.push(nums[(i+start_index)%nums.length])
        }
        console.log(unrotate)
        console.log(nums.sort((a,b)=>a-b))
        return JSON.stringify(unrotate) === JSON.stringify(nums.sort((a,b)=>a-b));
    }
}
