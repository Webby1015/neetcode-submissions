class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map: Map<number, number> = new Map();

        for (const i of nums) {
            map.set(i, (map.get(i) || 0) + 1);
        }

        const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

        return [...sortedMap.keys()].slice(0,k);
    }
}
