class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let score = [];
        for(let i of operations){
            if(i=="+"){
                let a = score[score.length-1] ? score[score.length-1] : 0
                let b = score[score.length-2] ? score[score.length-2] : 0
                score.push(a+b)
            }
            else if (i=="D"){
                let a = score[score.length-1] ? score[score.length-1] : 0;
                score.push(a*2)
            }
            else if(i=="C"){
                score.pop()
            }
            else {
                score.push(Number(i))
            }

        }
        return score.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}
