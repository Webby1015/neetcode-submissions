class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const count_map = new Map();
        const result = [];
        const div = Math.floor(nums.length/3)
        for (let i of nums) {
            if (count_map.get(i)) {
                count_map.set(i, count_map.get(i) + 1);
            } else count_map.set(i, 1);
        }
        // console.log(count_map,div,nums.length)
        for(let [key,value] of count_map){
            if(value>div) result.push(key)
        }
        return result;
    }
}
