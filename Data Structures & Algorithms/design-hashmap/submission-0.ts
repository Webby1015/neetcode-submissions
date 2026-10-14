class MyHashMap {
    private data: number[][];
    private keys_set;
    private keys_array;

    constructor() {
        this.data = [];
        this.keys_set = new Set();
        this.keys_array = [];
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.keys_set.has(key)) {
            let index = this.keys_array.indexOf(key);
            this.data[index][1] = value;
        } else {
            this.keys_set.add(key);
            this.keys_array.push(key);
            this.data.push([key, value]);
        }
        // console.log("PUT ", this.data, key, value);
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        // console.log("GET ", this.data, key);
        if (this.keys_set.has(key)) {
            let index = this.keys_array.indexOf(key);
            return this.data[index][1];
        }
        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        if (this.keys_set.has(key)) {
            let index = this.keys_array.indexOf(key);
            this.keys_array.splice(index, 1);
            this.data.splice(index, 1);
            this.keys_set.delete(key);
        }
        // console.log("remove ", this.data, key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
