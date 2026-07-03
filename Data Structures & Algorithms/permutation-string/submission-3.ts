class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
      if (s1.length > s2.length)
        return false;
      
      const need = new Array(26).fill(0);
      const window = new Array(26).fill(0);
      const a = 'a'.charCodeAt(0);

      for (let i=0; i<s1.length;i++) {
        need[s1.charCodeAt(i) - a]++
        window[s2.charCodeAt(i) -a]++;
      }



      if (need.every((v,i)=> v===window[i]))
        return true;
    
      for (let j=s1.length;j<s2.length;j++) {
        window[s2.charCodeAt(j) -a]++
        window[s2.charCodeAt(j-s1.length) -a]--;
        if (need.every((v,i)=> v===window[i]))
          return true;
      }
      return false;
    }
}
