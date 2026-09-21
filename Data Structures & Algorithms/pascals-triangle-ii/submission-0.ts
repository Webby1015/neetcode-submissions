class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex: number): number[] {
        let pyramid = [[1]];
        for (let i = 2; i <= rowIndex + 1; i++) {
            let row = new Array(i).fill(0);
            row[0] = 1;
            row[i - 1] = 1;
            // console.log(row)
            pyramid.push(row);
        }

        for (let i = 2; i < pyramid.length; i++) {
            for (let j = 1; j < pyramid[i].length - 1; j++) {
                pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i - 1][j];
            }
        }

        return pyramid[rowIndex];
    }
}
