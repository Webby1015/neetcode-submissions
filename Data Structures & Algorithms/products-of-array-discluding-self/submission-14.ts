class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // brute force results in tle
        // const n = nums.length;
        // const res: number[] = new Array(n);

        // for (let i = 0; i < n; i++) {
        //     let prod = 1;
        //     for (let j = 0; j < n; j++) {
        //         if (i !== j) {
        //             prod *= nums[j];
        //         }
        //     }
        //     res[i] = prod;
        // }
        // return res;


        
        // const res = [];
        // const map: Map<number, number> = new Map();
        // for (let i = 0; i < nums.length; i++) {
        //     let product = 1;
        //     if (map.has(nums[i])) product *= map.get(nums[i]);
        //     else {
        //         for (let j = 0; j < nums.length; j++) {
        //             if (j != i) {
        //                 product *= nums[j];
        //             }
        //         }
        //         map.set(nums[i],product)
        //     }
        //     res.push(product);
        // }
        // return res;

        let prod = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num !== 0) {
                prod *= num;
            } else {
                zeroCount++;
            }
        }

        if (zeroCount > 1) {
            return Array(nums.length).fill(0);
        }

        const res: number[] = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? prod : 0;
            } else {
                res[i] = prod / nums[i];
            }
        }
        return res;
    
    }
}