class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequencyMap = new Map<number, number>();

        for (const num of nums) {
            const currentCount = frequencyMap.get(num) ?? 0;
            frequencyMap.set(num, currentCount + 1);
        }

        const sortedEntries = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1]);

        return sortedEntries.slice(0, k).map(([num]) => num);

        // there is also a heap solution that ill do after doing some heap questions
        // also a solutoin with bucket sort that ill come back to after a while
    }
}
