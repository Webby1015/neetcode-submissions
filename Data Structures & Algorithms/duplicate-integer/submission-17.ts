class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set:Set<number> = new Set()

        for(let i of nums){
            if(set.has(i)) return true;
            else set.add(i)
        }
        return false;

        // const map = new Map<number,number>()
        // for(let i = 0;i<nums.length;i++){
        //     if(map.has(nums[i])) return true
        //     else map.set(nums[i],1)
        // }
        // return false;
    }
}
