class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let arr = [];
        for(let i=0; i<tokens.length;i++) {
            if (tokens[i] === "+") {
                const val1 = arr.pop();
                const val2 = arr.pop();
                arr.push(val1+val2);
            }

            else if (tokens[i] === "-") {
               const val1 = arr.pop();
                const val2 = arr.pop();
                arr.push(val2-val1);
            }

            else if (tokens[i] === "*") {
             const val1 = arr.pop();
                const val2 = arr.pop();
                arr.push(val1*val2);
            }

            else if (tokens[i] === "/") {
              const val1 = arr.pop();
                const val2 = arr.pop();
                arr.push(Math.trunc(val2/val1));
            }
            else 
              arr.push(+tokens[i]);
            console.log(arr);
        }
        return arr[0];
    }
}
