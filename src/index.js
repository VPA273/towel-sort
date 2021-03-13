
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (!matrix) return arr;
  if (matrix.length ==0) return arr;
  if (matrix == undefined) return arr;
  for (item = 1; item < matrix.length ; item++ ) {
          if( item % 2 ==1 ) { matrix[item].reverse() }
      for( let i=0 ; i < matrix.length ; i++ ) {
    for( let p=0 ; p < matrix.length ; p++) {
      arr.push(matrix[i][p])
    }
  }
  return arr;
}