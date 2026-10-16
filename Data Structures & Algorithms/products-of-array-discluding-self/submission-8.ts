class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = [];
        const map: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            if (map.has(nums[i])) product *= map.get(nums[i]);
            else {
                for (let j = 0; j < nums.length; j++) {
                    if (j != i) {
                        product *= nums[j];
                    }
                }
                map.set(nums[i],product)
            }
            res.push(product);
        }
        return res;
    }
}
