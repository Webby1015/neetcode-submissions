class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map: Map<number, number> = new Map();
        for(const i of nums){
            if(map.has(i)) map.set(i,map.get(i)+1)
            else map.set(i,1)
        }
        return [...map.entries()].sort((a,b)=>b[1]-a[1]).map(entry => entry[0]).slice(0,k)
    }
}
