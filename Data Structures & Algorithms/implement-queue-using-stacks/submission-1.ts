class MyQueue {
    private stack: number[];
    private operation_stack: number[];
    private length: number;
    constructor() {
        this.stack = [];
        this.operation_stack = [];
        this.length = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.stack.push(x)
        this.length++;
    }

    /**
     * @return {number}
     */
    pop(): number {
        let temp = 0;
        for (let i = 0; i < this.length; i++) {
            temp = this.stack.pop()
            if (i < this.length - 1) {
                this.operation_stack.push(temp)
            }
        }
        this.length--
        for (let i = 0; i < this.length; i++) {
            this.stack.push(this.operation_stack.pop())
        }
        return temp;
    }


    /**
     * @return {number}
     */
    peek(): number {
        let temp = 0;
        for (let i = 0; i < this.length; i++) {
            temp = this.stack.pop()
            this.operation_stack.push(temp)
        }
        for (let i = 0; i < this.length; i++) {
            this.stack.push(this.operation_stack.pop())
        }
        return temp;
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        if (this.length > 0) return false;
        return true;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
