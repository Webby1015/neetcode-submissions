class MinStack {
    private data:number[]
    private length:number
    constructor() {
        this.data = []
        this.length = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.data.push(val)
        this.length++
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.data.pop()
        this.length--
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.data[this.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return Math.min(...this.data)
    }
}
