class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums: number[], k: number): number {
        let res = 0
        let currSum = 0;
        let map:Map<number,number> = new Map();
        map.set(0,1)
        for(let i of nums){
            currSum += i
            let diff = currSum - k
            if(map.has(diff)) res += map.get(diff)
            if(map.has(currSum)) map.set(currSum,map.get(currSum)+1)
            else map.set(currSum,1)
        }
        // console.log(map)
        return res;


        // brute force 
        // let count = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i; j < nums.length; j++) {
        //         if(k == nums.slice(i, j + 1).reduce((a,c)=>a+c,0)) count ++;
        //     }
        // }
        // return count;
    }
}
