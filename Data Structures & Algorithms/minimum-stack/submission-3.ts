class MinStack {
    private data: number[]
    private length: number
    private minStack: number[]
    constructor() {
        this.data = []
        this.length = 0
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.data.push(val)
        this.length++
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        let temp = this.data.pop()
        if (temp == this.minStack[this.minStack.length - 1]) this.minStack.pop()
        this.length--
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.data[this.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}