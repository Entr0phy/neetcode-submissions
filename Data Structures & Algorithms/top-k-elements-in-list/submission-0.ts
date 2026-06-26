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
        while(k>0) {
            let val;
            let count =0;
            for (const [key, value] of map) {
                count = Math.max(count, value);
                if (count === value)
                  val = key;
            }
            map.delete(val);
            res.push(val);
            k--;
        }
        return res;
    }
}
