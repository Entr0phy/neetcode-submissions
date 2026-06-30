class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res = [];
        nums.forEach((val, index) => {
          let j = index+1;
          let k = index+2;
          while(j<nums.length) {
            if (val + nums[j] + nums[k] ===0) {
              res.push([val, nums[j], nums[k]]);
            }
            if (k===nums.length) {
                j++;
                k=j;
            }
            k++;
          }
        })
        const set = new Set();
        const finalRes = [];
        for (const row of res){
            const key = row.sort().join();
            if(!set.has(key)){
                set.add(key);
                finalRes.push(row);
            }
        }
        return finalRes;
    }
}
