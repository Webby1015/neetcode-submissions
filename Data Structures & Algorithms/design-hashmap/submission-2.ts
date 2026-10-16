class MyHashMap {
    private key_set:Set<number>
    private data:number[][]
    private key_list:number[]
    constructor() {
        this.key_set = new Set<number>()
        this.key_list = []
        this.data = [] 
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        // console.log("put",this.key_set.has(key))
        if(this.key_set.has(key)) this.data[this.key_list.indexOf(key)][1] = value;
        else this.data.push([key,value]),this.key_list.push(key),this.key_set.add(key);
        // console.log("put",this.data)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        // console.log("get",this.key_set.has(key))
        if(this.key_set.has(key)) return this.data[this.key_list.indexOf(key)][1]
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        // console.log("remove",this.key_set.has(key))
        if(this.key_set.has(key)){
            this.key_set.delete(key)
            const index = this.key_list.indexOf(key)
            this.data.splice(index,1)
            this.key_list.splice(index,1)
        } 
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
