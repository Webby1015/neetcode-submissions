class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid: number[][]): number[] {
        const flat: number[] = [];
        let missing: number;
        let duplicate: number;
        for (const i of grid) {
            for (const j of i) {
                flat.push(j);
            }
        }
        const sorted_flat = flat.sort((a, b) => a - b);
        console.log(sorted_flat)
        for (let i = 0; i < sorted_flat.length - 1; i++) {
            // console.log(sorted_flat[i + 1], sorted_flat[i], sorted_flat[i + 1] - sorted_flat[i]);
            if (sorted_flat[i + 1] - sorted_flat[i] === 2) {
                missing = (sorted_flat[i] + sorted_flat[i + 1]) / 2;
            } else if (sorted_flat[i] - sorted_flat[i + 1] === 0) {
                duplicate = sorted_flat[i];
            }
        }
        if (!missing) {
            if (sorted_flat[0] != 1) {
                missing = 1;
            } else if (sorted_flat[sorted_flat.length - 1] != sorted_flat.length) {
                missing = sorted_flat.length;
            }
        }

        return [duplicate,missing];

    }
}
