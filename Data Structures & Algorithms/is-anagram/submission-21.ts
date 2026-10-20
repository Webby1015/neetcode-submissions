class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        const s_map: Map<string, number> = new Map();
        const t_map: Map<string, number> = new Map();
        for (let i = 0; i < s.length; i++) {
            if (s_map.has(s[i])) s_map.set(s[i], s_map.get(s[i]) + 1);
            else if (!s_map.has(s[i])) s_map.set(s[i], 1);
            if (t_map.has(t[i])) t_map.set(t[i], t_map.get(t[i]) + 1);
            else if (!t_map.has(t[i])) t_map.set(t[i], 1);
        }
        // console.log(s_map,t_map)
        for (let i of s_map.keys()) {
            // console.log(i,s_map.get(i),t_map.get(i),s_map.get(i) !== t_map.get(i))
            if (s_map.get(i) !== t_map.get(i)) return false;
        }
        return true;
    }
}
