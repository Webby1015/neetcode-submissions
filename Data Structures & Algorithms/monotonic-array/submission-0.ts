class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isMonotonic(nums: number[]): boolean {
        let increasing = structuredClone(nums)
        let decreasing = structuredClone(nums)

        increasing.sort((a,b)=>a-b)
        decreasing.sort((a,b)=>b-a)

        if(JSON.stringify(nums)== JSON.stringify(increasing) || JSON.stringify(nums)== JSON.stringify(decreasing)){
            return true;
        }
        return false;
    }
}
