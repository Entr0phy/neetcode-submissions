class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, number>();
        const asciiMap = new Map<string,string[]>();
        strs.forEach((val:string) => {
          const asciiArray = [];
          for(let i=0; i<val.length;i++) {
            asciiArray.push(val.charCodeAt(i));
          }
          asciiArray.sort();
          const asciiSum = asciiArray.join();
          if (!map.get(asciiSum)){
            map.set(asciiSum,1);
            asciiMap.set(asciiSum, [val])
          }
            
          else{
            map.set(asciiSum, map.get(asciiSum)+1);
            const currArray = asciiMap.get(asciiSum);
            currArray.push(val);
            asciiMap.set(asciiSum, currArray)
          }
            
        })
        const res = [];
        for (const [key, value] of asciiMap) {
           res.push(value);   
        }
        return res;
    }
}
