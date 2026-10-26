class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    // n*n*m
    // groupAnagrams(strs: string[]): string[][] {
    //     if(strs.length==1) return [[strs[0]]];
    //     let i = 0;
    //     let res = [];
    //     while (i < strs.length) {
    //         const base = strs[i];
    //         strs[i] = "_";
    //         if (base != "_") {
    //             let temp = [base];
    //             for (let j = i + 1; j < strs.length; j++) {
    //                 if (this.isAnagrams(base, strs[j])) {
    //                     temp.push(strs[j]);
    //                     strs[j] = "_";
    //                 }
    //             }
    //             res.push(temp);
    //         }
    //         i++;
    //     }
    //     return res;
    // }

    // isAnagrams(s: string, t: string): boolean {
    //     if (s.length !== t.length) return false;
    //     const s_map: Map<string, number> = new Map();
    //     const t_map: Map<string, number> = new Map();
    //     for (let i = 0; i < s.length; i++) {
    //         if (s_map.has(s[i])) s_map.set(s[i], s_map.get(s[i]) + 1);
    //         else if (!s_map.has(s[i])) s_map.set(s[i], 1);
    //         if (t_map.has(t[i])) t_map.set(s[i], t_map.get(t[i]) + 1);
    //         else if (!t_map.has(t[i])) t_map.set(t[i], 1);
    //     }

    //     for (let i of s) {
    //         if (s_map.get(i) !== t_map.get(i)) return false;
    //     }
    //     return true;
    // }


    // n*mlogm
    // groupAnagrams(strs: string[]): string[][] {
    //     const map = new Map<string,string[]>
    //     for(const str of strs){
    //         const key =  str.split('').sort().join('')
    //         if(map.has(key)) map.set(key,[...map.get(key),str])
    //         else map.set(key,[str])
    //     }
    //     return Array.from(map.values())
    // }


    // n*m
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string,string[]>
        const a = 'a';
        for(const str of strs){
            const counts = Array(26).fill(0)
            for(let i=0;i<str.length;i++){
                counts[str.charCodeAt(i)-a.charCodeAt(0)]++
            }
            // console.log(counts)
            let key = counts.join(',')
            if(map.has(key)) map.set(key,[...map.get(key),str])
            else map.set(key,[str])
        }
        // console.log(map)
        return Array.from(map.values())
    }
}
