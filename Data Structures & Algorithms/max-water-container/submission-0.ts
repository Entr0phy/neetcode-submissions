class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let max =0;
        for(let i=0; i<heights.length;i++) {
            for(let j=i+1;j<heights.length;j++) {
                const height = Math.min(heights[i], heights[j]);
                const length = j-i;
                max = Math.max(max, height * length);
            }
        }
        return max;
    }
}
