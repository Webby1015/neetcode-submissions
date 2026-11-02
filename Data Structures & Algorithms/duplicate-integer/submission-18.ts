class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const num_count:Set<Number> = new Set();
        for(let i of nums){
            if(num_count.has(i)) return true
            num_count.add(i)
        }
        return false;
    }
}
