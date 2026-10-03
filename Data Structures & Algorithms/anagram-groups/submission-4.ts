class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        let s_map = {};
        let t_map = {};
        const size = s.length;
        for (let i = 0; i < size; i++) {
            s_map[s[i]] = (s_map[s[i]] || 0) + 1;
            t_map[t[i]] = (t_map[t[i]] || 0) + 1;
        }

        for (const i of s) {
            if (s_map[i] !== t_map[i]) {
                return false;
            }
        }
        return true;
        // return s.split('').sort().join('') == t.split('').sort().join('')
    }
    groupAnagrams(strs: string[]): string[][] {
        const ana_map: Map<string, string[]> = new Map();

        for (const i of strs) {
            const j = i.split("").sort().join("");
            if (ana_map.has(j)) {
                ana_map.get(j)!.push(i);
            } else {
                ana_map.set(j, [i]);
            }
        }

        return [...ana_map.values()];
    }
}
