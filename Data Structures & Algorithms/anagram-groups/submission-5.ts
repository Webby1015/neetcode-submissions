class Solution {
    groupAnagrams(strs: string[]): string[][] {
        let anagram_map = new Map<string, string[]>();
        for (let i of strs) {
            let sorted = i.split('').sort().join('');
            if (!anagram_map.has(sorted)) {
                anagram_map.set(sorted, [i]);
            } else {
                anagram_map.get(sorted)!.push(i);
            }
        }
        return Array.from(anagram_map.values());
    }
}