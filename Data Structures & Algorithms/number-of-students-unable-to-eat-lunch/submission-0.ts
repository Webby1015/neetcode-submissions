class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let i = 0;
        let count = 10;
        while (students.length && sandwiches.length) {
            if(!students.includes(sandwiches[0])){
                return students.length;
            }
            else{
                if (students[i] == sandwiches[i]) {
                students.shift();
                sandwiches.shift();
            } else {
                let top: number = students[i];
                students.shift();
                students.push(top);
            }
            }
            
            // console.log(students, sandwiches);
        }
        return 0;
    }
}

// [1100],[0101]
// [1001],[0101]
// [0011],[0101]
// [011],[101]
// [110],[101]
// [10],[01]
// [01],[01]
// [1].[1]
// [],[]

// [111001],[100011]
// [11001],[00011]
// [10011],[00011]
// [00111],[00011]
// [0111],[0011]
// [111],[011]
