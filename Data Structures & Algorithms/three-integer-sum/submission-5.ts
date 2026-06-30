class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res = [];
        nums.sort((a,b) => a-b);
        for (let i=0;i<nums.length;i++) {
            if (nums[i] >0)
              break;
            if (nums[i] === nums[i-1])
              continue;
            let l = i+1;
            let r = nums.length -1;
            while(l<r) {
                const val = nums[i]+nums[l]+nums[r];
                if (val <0)
                l++;
                else if (val >0)
                r--;
                else {
                    res.push([nums[i],nums[l],nums[r]]);
                    l++;
                    r--;
                    while(l < r && nums[l]===nums[l-1])
                      l++;
                }
            }
        }
        return res;
    }
}
