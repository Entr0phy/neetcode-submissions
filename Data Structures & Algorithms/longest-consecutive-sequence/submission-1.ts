class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const hashSet = new Set(nums);
        let longest =0;
        nums.forEach((val) => {
            if (!hashSet.has(val-1)){
                let curr =1;
                while(hashSet.has(val+curr))
                  curr++;
                longest = Math.max(curr, longest);
            }
        })
        return longest;
    }
}
