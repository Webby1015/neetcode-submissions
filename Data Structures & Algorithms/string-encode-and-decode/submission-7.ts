class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let joiner = ">@*#*@<";
        const count = strs.length;
        const res = strs.join(joiner) + joiner + `${count}`;
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let splitter = ">@*#*@<";
        const res = str.split(splitter)
        const count = +res.pop()
        if(count==0) return []
        return res;
    }
}
