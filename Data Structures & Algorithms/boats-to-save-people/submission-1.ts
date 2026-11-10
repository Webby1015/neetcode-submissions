class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        people.sort((a,b)=>b-a)
        let left = 0;
        let right = people.length-1;
        let count = 0;
        while(left<=right){
            if(people[left]+people[right]==limit){
                // console.log("equal",people[left],people[right],limit)
                count++;
                left++,right--;
            }else if(people[left]+people[right]>limit){
                // console.log("greater",people[left],people[right],limit)
                left++
                count++
            }else{
                // console.log("less",people[left],people[right],limit)
                right--
                left++
                count++
            }
            // console.log(people.slice(left,right+1))
        }
        return count;
    }
}
