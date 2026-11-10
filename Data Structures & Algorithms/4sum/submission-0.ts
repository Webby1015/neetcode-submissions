class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums: number[], target: number): number[][] {
        let res = [];
        let set: Set<string> = new Set();
        nums.sort((a,b)=>a-b)
        // console.log(nums)
        for (let i = 0; i < nums.length; i++) {
            let threeSum = this.ThreeSum(nums.slice(i + 1),target -nums[i]);
            // console.log(nums.slice(i+1),-nums[i],"------>",threeSum)
            if (threeSum.length != 0) {
                for (let j of threeSum) {
                    let temp = [nums[i], ...j].sort().join("");
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

    ThreeSum(nums: number[], target: number): number[][] {
        if (nums.length == 3) {
            if (nums[0] + nums[1] + nums[2] == target) return [nums];
            else return [];
        }
        let res = [];
        let set: Set<string> = new Set();
        for (let i = 0; i < nums.length - 1; i++) {
            let twoSum = this.TwoSum(nums.slice(i + 1),target -nums[i]);
            // console.log(nums.slice(i+1),-nums[i],"------>",twoSum)
            if (twoSum.length != 0) {
                for (let j of twoSum) {
                    let temp = [nums[i], ...j].sort().join("");
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

    TwoSum(numbers: number[], target: number): number[][] {
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
}
