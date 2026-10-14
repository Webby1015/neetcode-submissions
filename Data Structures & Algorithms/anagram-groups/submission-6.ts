class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagram_map = new Map<string,string[]>();
        for(let i of strs){
            let key = i.split('').sort().join('')
            if(anagram_map.has(key)) anagram_map.set(key,[...anagram_map.get(key),i])
            else anagram_map.set(key,[i])
        }
        return Array.from(anagram_map.values())
    }
}
