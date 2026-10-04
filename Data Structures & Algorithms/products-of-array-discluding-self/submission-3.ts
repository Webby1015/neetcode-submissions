class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    arrayProductExcept(arr: number[],i): number {
        let product = 1;
        for (let iter=0;iter<arr.length;iter++) {
            if(iter!=i){
                product *= arr[iter];
            }
        }
        return product;
    }
    productExceptSelf(nums: number[]): number[] {
        let res = [];
        let product_map: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            if(product_map.has(nums[i])){
                res.push(product_map.get(nums[i]));
            }
            else{
                let product = this.arrayProductExcept(nums,i)
                res.push(product);
                product_map.set(nums[i], product)
            }
        }
        console.log(product_map)
        return res;
    }
}
