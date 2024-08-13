
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arraySort = []  
  if (!matrix || !matrix.length) {
    return arraySort  
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        arraySort = arraySort.concat(matrix[i]);
      } else { 
        arraySort = arraySort.concat(matrix[i].reverse());
      }
    }
    // console.log(arraySort);    
    return arraySort
  }    
  }
      
  