class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i++) {
            let column = [];
            if (this.isDuplicate(board[i])) return false;
            for (let j = 0; j < 9; j++) {
                if (board[j][i] != ".") column.push(board[j][i]);
                if (i % 3 == 0 && j % 3 == 0) {
                    if (
                        this.isDuplicate([
                            board[i][j],board[i][j + 1],board[i][j + 2],
                            board[i + 1][j],board[i + 1][j + 1],board[i + 1][j + 2],
                            board[i + 2][j],board[i + 2][j + 1],board[i + 2][j + 2]
                        ])
                    )
                        return false;
                }
            }
            if (this.isDuplicate(column)) return false;
        }
        return true
    }

    // checkBoxes(nums:string[]):boolean{

    // }

    isDuplicate(nums: string[]): boolean {
        let map: Map<string, number> = new Map();
        for (const i of nums) {
            if (isNaN(Number(i))) continue;
            else if (map.has(i)) {
                return true;
            } else map.set(i, 1);
        }
        return false;
    }
}
