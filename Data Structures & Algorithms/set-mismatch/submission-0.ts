class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findErrorNums(nums: number[]): number[] {
        const count:Record<string,number> = {}
        let res = []
        for(let i =1; i<nums.length+1;i++){
            count[i]=0
        }
        for(const i of nums){
            count[i]++
        }
        for(const i of Object.keys(count)){
            if(count[i]==2){
                res[0]=i
            }
            else if(count[i]==0){
                res[1]=i
            }
        }
        return res;
    }
}
