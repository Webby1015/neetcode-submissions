class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        if(nums.length == 1 || nums.length == 2) return [...nums]
        const map:Map<number,number> = new Map()
        let threshold:number = Math.floor(nums.length/3)
        const res:Set<number> = new Set()
        for(let i of nums){
            if(map.has(i)){
                let inc = map.get(i)+1;
                if(inc>threshold) res.add(i)
                map.set(i,inc);
            }else map.set(i,1)
        }
        return Array.from(res)
    }
}
