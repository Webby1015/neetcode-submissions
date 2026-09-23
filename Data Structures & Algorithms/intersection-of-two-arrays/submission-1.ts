class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */

    intersection(nums1: number[], nums2: number[]): number[] {
        let intersection:Set<number> = new Set();

        for (let i of nums1) {
            for (let j of nums2) {
                if (i == j) {
                    intersection.add(i);
                }
            }
        }
        const arr: number[] = [...intersection];
        return arr;
    }

    // intersection(nums1: number[], nums2: number[]): number[] {
    //     let intersection:number[] = []

    //     for(let i of nums1){
    //         for(let j of nums2){
    //             if(i==j && !intersection.includes(i)){
    //                 intersection.push(i)
    //             }
    //         }
    //     }

    //     return intersection;
    // }
}
