class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums: number[]): boolean {
        const count: Record<number,number> ={}
        const pairs =Math.ceil( nums.length/2)
        let required_pairs = 0;
        for(const i of nums){
            count[i] = (count[i]||0)+1;
        }



        for(const i of Object.keys(count)){
            required_pairs +=Math.ceil(count[i]/2)
        }

        return required_pairs===pairs;
    }
}
