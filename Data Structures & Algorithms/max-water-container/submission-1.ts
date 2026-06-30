class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l =0;
        let r =heights.length -1;
        let res =0;
        while(l<r) {
          const height = Math.min(heights[l], heights[r]);
          const length = r-l;
          res = Math.max(res, height * length);
          if (heights[l] > heights[r])
            r--;
          else
            l++;
        }
        return res;
    }
}
