class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
      const total = nums.reduce((acc, curr) => acc * curr,1)
      if (total ===0) {
        const arr = nums.map((val, index) => {
            if (val !== 0)
            return 0;
            else {
              const product = nums.filter((value, idx) => index !== idx);
              return product.reduce((acc, curr) => acc * curr,1);
            }
           
            
        })
        return arr;
      }
      const newArr = nums.map((val) => total/val)
      return newArr;
    }
}
