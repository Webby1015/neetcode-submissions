class MyHashSet {
    private data: Map<number, boolean>;
    constructor() {
        this.data = new Map<number,boolean>()
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        this.data.set(key,true)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        this.data.delete(key)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return this.data.has(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
