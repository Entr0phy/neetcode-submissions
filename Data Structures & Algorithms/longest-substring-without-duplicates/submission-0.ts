class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max=0;
        for(let i=0;i<s.length;i++) {
            const set = new Set();
            let pointer =i
            let length =0;
            while(pointer < s.length) {
                if (set.has(s[pointer]))
                  break;
                else {
                  set.add(s[pointer]);
                  pointer++;
                  length++;
                }
                  
            }
            max = Math.max(max, length);
        }
        return max;
    }
}
