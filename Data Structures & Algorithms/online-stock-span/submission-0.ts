class StockSpanner {
    private arr: number[];

    constructor() {
        this.arr = [];
    }
    next(price: number): number {
        this.arr.push(price);
        let i = this.arr.length - 2;
        while (i >= 0 && this.arr[i] <= price) {
            i--;
        }
        return this.arr.length - i - 1;
    }
}