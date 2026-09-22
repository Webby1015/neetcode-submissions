class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s: string): number {
        let length = 0;
        const count:Record<string,number> = {}
        for(const i of s){
            count[i] = (count[i]||0)+1;
        }
        console.log(count)
        for(const i of Object.keys(count)){
            if(count[i]%2==0){
                length+=count[i]
            }
            if(count[i]%2!=0 && count[i]>2){
                length+=count[i]-1
            }
        }
        console.log(length,s.length)
        if(length<s.length){
            length++
        }
        return length;

    }
}
