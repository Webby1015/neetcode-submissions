class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets: number[], k: number): number {
        let seconds = 0;
        let i = 0;
        while(tickets[k]!==0){
            // console.log(tickets)
            if(tickets[i]!=0){
                seconds++
                tickets[i]--
            }
            if(i==tickets.length-1){
                i=0
            }else{
                i++
            }
        }
        return seconds
    }
}
