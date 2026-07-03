class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const set = new Set(s);
        let res = 0;
        for (let c of set) {
            let count =0;
            let l=0;
            for(let r =0; r<s.length;r++) {
                if (s[r] === c)
                  count++;
                while(r-l+1 - count > k) {
                    if(s[l] === c)
                      count--
                    l++;
                }
                res = Math.max(r-l+1, res);
            }
            
        }
        return res;
    }
}
