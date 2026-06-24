class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>();
        nums.forEach((val) => {
            if (map.has(val))
              map.delete(val);
            else 
            map.set(val,1);
        })
        return Array.from(map.keys()).length !== nums.length;
    }
}
