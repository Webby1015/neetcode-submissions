class MyHashSet {
    private data:number[]
    constructor() {
        this.data = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        if(!this.contains(key)) this.data.push(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        if(this.data.indexOf(key)!=-1) this.data.splice(this.data.indexOf(key),1)
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        console.log(this.data,key,this.data.includes(key))
        return this.data.includes(key)
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
