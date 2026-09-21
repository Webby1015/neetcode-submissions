class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights: number[]): number {
        let incorrect:number = 0;
        let expected:number[] = structuredClone(heights)
        expected = expected.sort((a,b)=>a-b)
        for(let i = 0;i<heights.length;i++){
            if(expected[i]!=heights[i]){
                incorrect++
            }
        }
        return incorrect;
    }
}
