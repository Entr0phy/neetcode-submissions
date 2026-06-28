class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        for (let i=0;i<9;i++) {
            const rowMap = new Set();
           //row check
           for(let j=0; j<9;j++) {
            const value = board[i][j];
            if (value === '.')
              continue;
            if (!rowMap.has(value))
              rowMap.add(value);
            else
              return false;
           }
        }
        for (let i=0;i<9;i++) {
           //column check
              const columnMap = new Set();
           for(let j=0; j<9;j++) {
         
            const value = board[j][i];
            if (value === '.')
              continue;
            if (!columnMap.has(value))
              columnMap.add(value);
            else
              return false;
           }
        }
       
       for (let square=0; square<9;square++) {
         const squareSet = new Set();
         for (let i =0; i<3;i++ ) {
            for (let j=0;j<3;j++) {
                const rowValue = Math.floor(square/3) * 3 +i;
                const colValue = (square%3) * 3 +j;
                const value = board[rowValue][colValue];
                if (value === '.')
                  continue;
                if (!squareSet.has(value))
                  squareSet.add(value);
                else
                  return false;
            }
         }
       }
        return true;
    }
}
