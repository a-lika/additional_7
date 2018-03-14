module.exports = function solveSudoku(matrix) {
  // your solution
 var variables = []; 
 var arr = [];
 var solved = true;
while(solved){
solved = false;
for (var i = 0; i < 9; i++) {
	for (var j = 0; j < 9; j++) {
	 variables[i]=[];
	 if(matrix[i][j]==0){
	 variables[i][j]=[matrix[i][j]];
	 variables[i][j]=[1,2,3,4,5,6,7,8,9];
	 set_var(i,j);
}
}
}

 function set_var(i,j)	{
	for (var k = 0; k < 9; k++) {
	if (variables[i][j].indexOf(matrix[i][k]) != -1) {
	 variables[i][j].splice(variables[i][j].indexOf(matrix[i][k]), 1);
    }
	if (variables[i][j].indexOf(matrix[k][j]) != -1) {
      variables[i][j].splice(variables[i][j].indexOf(matrix[k][j]), 1);
    }	
	}
	return set_qw(i,j);	
	}
	
var rangeI, rangeJ;
function set_qw(i,j){
	rangeI = Math.floor(i/3)*3;
	rangeJ = Math.floor(j/3)*3;
	for (var n=rangeI; n<rangeI+3; n++ ) {
		for (var l=rangeJ; l<rangeJ+3; l++ ) {
			if (variables[i][j].indexOf(matrix[n][l]) != -1) {
				variables[i][j].splice(variables[i][j].indexOf(matrix[n][l]), 1);
			}
		}  	
	}

if(variables[i][j].length == 1){
	solved = true;
	matrix[i][j]=variables[i][j][0];

	}
if(!solved) {
		assign(i,j);
	}
};
	}

function assign(i,j,k)	{
arr.push(variables[i][j]);	
var arrLen = arr.length; 
for (var p = 0; p < variables[i][j].length; p++) {
for (var n = 0; n < arrLen; n++) {
if(matrix[i][j]==0){
 matrix[i][j]=variables[i][j][p];
 break;
}
}
}
}

return matrix;
 }
