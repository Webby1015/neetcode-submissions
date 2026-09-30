class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s: string): boolean {
        let stack = new Stack();
        const parenthesis_map = {
            ")": "(",
            "]": "[",
            "}": "{",
        };
        for (const i of s) {
            if (stack.top && stack.first.data == parenthesis_map[i]) {
                stack.pop();
                // stack.print()
            } else {
                stack.push(i);
            }
        }

        return stack.top == 0;
    }
}


class Node1<T> {
    data: T;
    next: Node1<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Stack<T> {
    first: Node1<T> | null;
    last: Node1<T> | null;
    top: number;

    constructor(data?: T) {
        if (data !== undefined) {
            this.first = new Node1<T>(data);
            this.last = this.first;
            this.top = 1;
        } else {
            this.first = null;
            this.last = null;
            this.top = 0;
        }
    }

    print(): void {
        let current: Node1<T> | null = this.first;

        console.log("Stack:");

        while (current) {
            console.log(current.data);
            current = current.next;
        }

        console.log("Size:", this.top);
    }

    push(data: T): void {
        const new_node = new Node1<T>(data);

        if (this.first) {
            new_node.next = this.first;
            this.first = new_node;
            this.top++;
        } else {
            this.first = new_node;
            this.last = this.first;
            this.top = 1;
        }
    }

    pop(): T | undefined {
        if (this.first) {
            const removed = this.first.data;

            if (this.first.next) {
                this.first = this.first.next;
                this.top--;
            } else {
                this.first = null;
                this.last = null;
                this.top = 0;
            }

            return removed;
        }

        return undefined;
    }
}
