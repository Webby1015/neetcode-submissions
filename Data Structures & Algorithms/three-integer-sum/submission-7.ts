class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        if (nums.length == 3) {
            if (nums[0] + nums[1] + nums[2] == 0) return [nums];
            else return [];
        }
        let res = [];
        let set: Set<string> = new Set();
        nums.sort((a, b) => a - b);
        // console.log(nums);
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
                // console.log("Return -->", twoSum);
                // let temp = [nums[i], ...twoSum].join("");
                // if (set.has(temp)) continue;
                // else {
                //     res.push([nums[i], ...twoSum]);
                //     set.add(temp);
                // }
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

    // there also exists a solution with hasmap
}
