class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    numIdenticalPairs(nums: number[]): number {
        let good_pair_count:number = 0;
        for(let i:number = 0; i<nums.length;i++){
            for(let j:number=i+1;j<nums.length;j++){
                if(i<j && nums[i] == nums[j]){
                    good_pair_count +=1
                }
            }
        }
        return good_pair_count;
    }
}
