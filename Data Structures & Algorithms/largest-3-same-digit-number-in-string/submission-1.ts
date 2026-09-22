class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num: string): string {
        let res = "";
        let max = 0
        for(let i = 0;i<num.length-2;i++){
            if(num[i]==num[i+1] && num[i]==num[i+2]){
                if(+num[i]>=max){
                    max = +num[i]
                    res = num[i]+num[i+1]+num[i+2]
                }
            }
        }
        return res;
    }
}
