class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        for (let i = 0; i < n; i++) nums1.pop();
        if (m == 0) {
            for (let i of nums2) nums1.push(i);
        } else {
            for (let j of nums2) {
                for (let i = 1; i < nums1.length; i++) {
                    if (j > nums1[i - 1] && j <= nums1[i]) {
                        nums1.splice(i, 0, j);
                        console.log(nums1)
                        break;
                    }
                }
                if (j <= nums1[0]){
                    nums1.unshift(j);
                } 
                if(j>nums1[nums1.length-1]){
                    nums1.push(j);
                }
            }
        }
    }
}
