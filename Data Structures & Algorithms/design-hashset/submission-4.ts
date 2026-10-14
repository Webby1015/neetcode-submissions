class MyHashSet {
    private map

    constructor() {
        this.map = new Map<number,boolean>
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        if(!this.map.has(key)){
            this.map.set(key,true)
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        if(this.map.has(key)) this.map.delete(key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return this.map.has(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
