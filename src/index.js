module.exports = function solveSudoku(matrix) {
    const variables = []; 
    let solved = true;

    for (let i = 0; i < 9; i++) {
        variables[i] = [];
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] == 0) {
                variables[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            } else {
                variables[i][j] = [matrix[i][j]];
                }
        }
    }
 
    while(solved)  {
        solved = false;
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if(matrix[i][j] === 0) {
                        setVariablesRange(i,j); 
                 }
            }
        }
         
        if(!solved) {
            loop: for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (matrix[i][j] === 0) {
                           matrix[i][j] = variables[i][j][0];
                           solved = true;
                           break loop;
                      } 
                  }
            }
        }
     };
     
     function setVariablesRange(i,j)	{
         for (let k = 0; k < 9; k++) {
            if (variables[i][j].indexOf(matrix[i][k]) != -1) {
                 variables[i][j].splice(variables[i][j].indexOf(matrix[i][k]), 1);
             }
            if (variables[i][j].indexOf(matrix[k][j]) != -1) {
                variables[i][j].splice(variables[i][j].indexOf(matrix[k][j]), 1);
            }	
         }
         setNumbers(i,j);	
    };
	
    function setNumbers(i,j) {
	   let rangeI = Math.floor(i/3)*3;
	   let rangeJ = Math.floor(j/3)*3;
	   for (let n = rangeI; n < rangeI + 3; n++ ) {
           for (let l = rangeJ; l < rangeJ + 3; l++ ) {
               if (variables[i][j].indexOf(matrix[n][l]) != -1) {
                   variables[i][j].splice(variables[i][j].indexOf(matrix[n][l]), 1);
               }
           }  	
	   }

        if(variables[i][j].length == 1) {
            matrix[i][j]=variables[i][j][0];
            solved = true;
        } 
        
        for (let k = 0; k < variables[i][j].length; k++) {
            let s = 0;
            for (let n = 0; n < 9; n++) {
                if (variables[i][n].indexOf(variables[i][j][k]) != -1) {
                    s++;
                }
                if (n == 8) {
                    if (s == 1) {
                        matrix[i][j] = variables[i][j][k];
                        variables[i][j] = [matrix[i][j]];
                        solved = true;
                    }
                }
            }
        }
        
        for (let k = 0; k < variables[i][j].length; k++) {
            let s = 0;
            for (let n = 0; n < 9; n++) {
                if (variables[n][j].indexOf(variables[i][j][k] != -1)) {
                    s++;
                }
                if (n == 8) {
                    if (s == 1) {
                        matrix[i][j] = variables[i][j][k];
                        variables[i][j] = [matrix[i][j]];
                        solved = true;
                    }
                }
            }
        }
    
        for (let k = 0; k < variables[i][j].length; k++) {   
            let s = 0;
            let applicants = [variables[i][j][k]];

	        for (let n = rangeI; n < rangeI + 3; n++ ) {
                for (let m = rangeJ; m < rangeJ + 3; m++ ) {
                    if (variables[n][m].indexOf(variables[i][j][k]) != -1) {
                        s++;
                            applicants.push([n, m]);
                    }
                }
                if (n == rangeI + 2) {
                    if (s == 1) {
                        matrix[i][j] = variables[i][j][k];
                        variables[i][j] = [matrix[i][j]];
                        solved = true;
                    }
                }
            }
        }
    };
   
    return matrix;
};
