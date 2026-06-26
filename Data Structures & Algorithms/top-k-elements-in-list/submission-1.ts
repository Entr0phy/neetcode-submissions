class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        nums.forEach((val) => {
            if(!map.get(val))
              map.set(val, 1);
            else
              map.set(val, map.get(val)+1)
        })
        const res = [];
        const sortedMap = new Map([...map.entries()].sort((a,b)=>b[1] - a[1]))
        const values = Array.from(sortedMap.keys());
        return values.slice(0,k);
    }
}
