class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let present_str = ""
        let last_found = 0;
        for (let i:number = 0; i<s.length;i++){
            for(let j:number = last_found ; j<t.length; j++){
                if(!(present_str[present_str.length-1]==s[i])){
                    if(s[i]===t[j]){
                        last_found = j
                        present_str = present_str+s[i]
                    }
                    last_found++
            console.log(i,j,s[i],t[j],s[i]===t[j],present_str[present_str.length-1]==s[i],present_str,last_found)
                }       
            } 
        }

        return s == present_str;
    }
}
