class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path: string): boolean {
        let init:number[] = [0,0]
        let ping:string = '00'
        let history:string[] = [ping]
        for(const i of path){
            if(i=='N'){
                init[0]++
            }
            else if(i=='S'){
                init[0]--
            }
            else if(i=='E'){
                init[1]++
            }
            else{
                init[1]--
            }
            ping = String(init[0])+String(init[1])
            // console.log(history,ping)
            if(history.includes(ping)){
                return true
            }
            history.push(ping)

        }
        return false;
    }
}
