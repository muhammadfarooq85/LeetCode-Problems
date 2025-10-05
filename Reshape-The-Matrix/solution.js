// 566. Reshape the Matrix

// Problem statement

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data. You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix. The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were. If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Understand the problem statement

// simply ye kr hme aik matrix dia gia hy jis me kuch rows aur colums ho gi aur matrix me rows aur columns ka hi combination hota hy tu hum ne given matrix ko in ke provided rows aur columns me change krna hy

// Solution

// sb se pehle tu ye check kre ge agr already provided matrix ki rows aur columns given rows and columns ke equal hy tu hme wahi matrix dena hy. warna hum simply itteration kr ke aik array me us matrix ko aik new shape de de ge.

var matrixReshape = function (mat, r, c) {
  const flat = mat.flat(); // Flatten the matrix
  console.log("flat ===>", flat);
  if (flat.length !== r * c) return mat; // Check if reshape possible

  let res = [];
  for (let i = 0; i < r; i++) {
    res.push(flat.slice(i * c, i * c + c)); // Create rows of size c
  }
  console.log("res ===>", res);
  return res;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    2,
    4
  )
); // [[1,2,3,4]]]
