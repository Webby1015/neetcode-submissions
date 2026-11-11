class MyStack {
    private queue: number[];
    private length: number;
    constructor() {
        this.queue = [];
        this.length = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue.push(x);
        this.length++;
    }

    /**
     * @return {number}
     */
    pop(): number {
        let temp = 0;
        for (let i = 0; i < this.length; i++) {
            temp = this.queue.shift();
            console.log(temp)
            if (i < this.length - 1) {
                this.queue.push(temp);
            }
        }
        this.length--;
        return temp;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[this.length-1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        if (this.length == 0) return true;
        return false;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
