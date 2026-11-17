class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        // for(let i =0 ;i<nums.length;i++){
        //     for(let j=i+1; j<nums.length;j++){
        //         if(nums[i]==nums[j]) return true
        //     }
        // }
        // return false;
        
        // nums.sort()
        // for(let i=1;i<nums.length;i++){
        //     if(nums[i]==nums[i-1]) return true
        // }

        // return false

        // return new Set(nums).size !== nums.length;

        const num_count:Set<Number> = new Set();
        for(let i of nums){
            if(num_count.has(i)) return true
            num_count.add(i)
        }
        return false;
    }
}
