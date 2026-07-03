class MinStack {
    private readonly arr = [];
    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.arr.length ===0)
          this.arr.push([val,val]);
        else {
          const currMin = this.getMin();
          const newMin = Math.min(currMin, val);
          this.arr.push([val,newMin]);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length-1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.arr[this.arr.length-1][1]
    }
}
