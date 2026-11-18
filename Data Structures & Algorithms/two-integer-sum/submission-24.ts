class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        for(let i =0;i<nums.length;i++){
            for(let j = i+1;j<nums.length;j++){
                if(nums[i]+nums[j]==target) return [i,j]
            }
        }

        // let nums1:number[][] = [];
        // for(let i=0;i<nums.length;i++){
        //     nums1.push([nums[i],i])
        // }
        // nums1.sort((a,b)=>a[0]-b[0])
        // let left = 0;
        // let right = nums.length-1;

        // while(left<right){
        //     if(nums1[left][0]+nums1[right][0] == target) return [nums1[left][1],nums1[right][1]]
        //     else if(nums1[left][0]+nums1[right][0]>target) right--
        //     else if(nums1[left][0]+nums1[right][0]<target) left++
        // }


        // let sum_map = new Map;
        // for(let i = 0;i<nums.length;i++){
        //     if(sum_map.has(nums[i])) return [i,sum_map.get(nums[i])]
        //     else{
        //         sum_map.set(target-nums[i],i)
        //     }
        // }

    }
}
