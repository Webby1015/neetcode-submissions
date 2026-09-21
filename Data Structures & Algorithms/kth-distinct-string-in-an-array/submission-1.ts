class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr: string[], k: number): string {
        let res = '';
        const count: Record<string, number> = {};
        for(const i of arr){
            count[i] = (count[i] || 0) + 1;
        }
        // console.log(count.length)
        
        for(const i of Object.keys(count)){
            if(count[i]==1){
                k--
                if(k==0){
                    res=i
                }
            }
        }
        return res;
    }
}
