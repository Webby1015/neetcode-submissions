class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let sixty_and_more = 0;

        for(let i = 0 ;i <details.length;i++){
            let age = +(details[i][11]+details[i][12])
            if(age>60){
                sixty_and_more++
            }
        }

        return sixty_and_more;

    }
}
