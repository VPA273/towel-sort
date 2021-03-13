
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  for( let i=0 ; i < matrix.length ; i++ ) {
    for( let p=0 ; p < matrix.length ; p++) {
      arr.push( matrix[i][p] );
    }
    } 
   return arr;
}
