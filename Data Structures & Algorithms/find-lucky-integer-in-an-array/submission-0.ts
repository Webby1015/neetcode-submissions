class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr: number[]): number {
        let largest = -1
        const count: Record<number, number> = {};
        for(const i of arr){
            count[i]=(count[i] || 0) + 1
        }
        for(const i of Object.keys(count)){
            if(i==count[i]){
                if(+i>=largest){
                    largest = +i
                }
            }
        }
        return largest;
    }
}
