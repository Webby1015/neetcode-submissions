class MyHashMap {
    private data: number[][];
    private key_list: number[];
    private key_set;
    constructor() {
        this.data = [];
        this.key_list = [];
        this.key_set = new Set<number>();
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.key_set.has(key)) {
            this.data[this.key_list.indexOf(key)][1] = value;
        } else {
            this.key_set.add(key);
            this.key_list.push(key);
            this.data.push([key, value]);
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if(this.key_set.has(key)) return this.data[this.key_list.indexOf(key)][1]
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        if(this.key_set.has(key)){
            this.key_set.delete(key)
            let index = this.key_list.indexOf(key)
            this.key_list.splice(index,1)
            this.data.splice(index,1)
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
