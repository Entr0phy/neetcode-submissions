class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let x =0;
        let y=0;
        for(let i=0;i<numbers.length;i++) {
            for (let j=i+1; j<numbers.length;j++) {
                if (numbers[i] === numbers[j])
                  continue;
                if (numbers[i] + numbers[j] === target)
                  return [i+1, j+1]
            }
        }
    }
}
