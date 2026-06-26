class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0)
          return 'empty';
      const res = [];
      strs.forEach((val)=> {
        let string = ''
        for(let i=0; i<val.length;i++) {
            let value = '0';
            const ascii = val.charCodeAt(i);
            if (ascii <10)
              value = `00${ascii}`
            else if (ascii <100)
              value = `0${ascii}`
            else
              value = ascii.toString();
            string+=value
        }
        res.push(string);
      })
      return res.join();
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === 'empty')
          return []
        const res = [];
        const array = str.split(',');
        array.forEach((val)=> {
          let string = ''
          for(let i=0;i<val.length;i+=3) {
            const secondVal = i+1;
            const thirdVal = i+2;
            const ascii = `${val[i]}${val[i+1]}${val[i+2]}`
            string+=String.fromCharCode(+ascii);
          }
          res.push(string)
        })
        return res;
    }
}
