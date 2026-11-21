class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */


    // brute force resultes in
    // threeSum(nums: number[]): number[][] {
    //     const res:number[][] = []
    //     let set = new Set<string>
    //     nums.sort((a,b)=>a-b)
    //     for (let i = 0; i < nums.length; i++) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             for (let k = j + 1; k < nums.length; k++) {
    //                 if (nums[i] + nums[j] + nums[k] === 0) {
    //                     let temp = [nums[i], nums[j], nums[k]].join('')
    //                     if(set.has(temp)){
    //                         continue
    //                     }else{
    //                         set.add(temp)
    //                         res.push([nums[i], nums[j], nums[k]]);
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     return res;
    // }



    threeSum(nums: number[]): number[][] {
        if (nums.length == 3) {
            if (nums[0] + nums[1] + nums[2] == 0) return [nums];
            else return [];
        }
        let res = [];
        let set: Set<string> = new Set();
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 1; i++) {
            let twoSum = this.twoSum(nums.slice(i + 1), -nums[i]);
            if (twoSum.length != 0) {
                for (let j of twoSum) {
                    let temp = [nums[i], ...j].join("");
                    if (set.has(temp)) continue;
                    else {
                        res.push([nums[i], ...j]);
                        set.add(temp);
                    }
                }
            }
        }
        return res;
    }

    twoSum(numbers: number[], target: number): number[][] {
        let left = 0;
        let right = numbers.length - 1;
        let res: number[][] = [];
        while (left < right) {
            // console.log(numbers[left], numbers[right], target);
            if (numbers[left] + numbers[right] > target) right--;
            else if (numbers[left] + numbers[right] < target) left++;
            else {
                res.push([numbers[left], numbers[right]]);
                left++;
                right--;
            }
        }
        return res;
    }



    // threeSum(nums: number[]): number[][] {
    //     nums.sort((a, b) => a - b);
    //     const count = new Map<number, number>();
    //     for (let num of nums) {
    //         count.set(num, (count.get(num) || 0) + 1);
    //     }

    //     const res: number[][] = [];
    //     for (let i = 0; i < nums.length; i++) {
    //         count.set(nums[i], count.get(nums[i])! - 1);
    //         if (i > 0 && nums[i] === nums[i - 1]) continue;

    //         for (let j = i + 1; j < nums.length; j++) {
    //             count.set(nums[j], count.get(nums[j])! - 1);
    //             if (j > i + 1 && nums[j] === nums[j - 1]) continue;

    //             const target = -(nums[i] + nums[j]);
    //             if (count.get(target)! > 0) {
    //                 res.push([nums[i], nums[j], target]);
    //             }
    //         }

    //         for (let j = i + 1; j < nums.length; j++) {
    //             count.set(nums[j], count.get(nums[j])! + 1);
    //         }
    //     }
    //     return res;
    // }



    // threeSum(nums: number[]): number[][] {
    //     nums.sort((a, b) => a - b);
    //     const res: number[][] = [];

    //     for (let i = 0; i < nums.length; i++) {
    //         if (nums[i] > 0) break;
    //         if (i > 0 && nums[i] === nums[i - 1]) continue;

    //         let l = i + 1;
    //         let r = nums.length - 1;
    //         while (l < r) {
    //             const sum = nums[i] + nums[l] + nums[r];
    //             if (sum > 0) {
    //                 r--;
    //             } else if (sum < 0) {
    //                 l++;
    //             } else {
    //                 res.push([nums[i], nums[l], nums[r]]);
    //                 l++;
    //                 r--;
    //                 while (l < r && nums[l] === nums[l - 1]) {
    //                     l++;
    //                 }
    //             }
    //         }
    //     }
    //     return res;
    // }
}
