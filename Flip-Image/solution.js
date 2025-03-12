// 832. Flipping an Image

// Problem statement

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].

// Understand the problem first...

// hme aik binary matrix dia gia hy hum ne usko flip kr ke invert krna hy aur hum ne wo image return krni hy. flip ka mtlb hum ne usko reverse krna hy aur uske badd usko invert krna hy agr 0 hy tu 1 aur 1 hy tu 0 krna hy.

// Solution

// solution ye hy ke hum ne nested loops ka use krna hy aur pehle reverse kr ke then usko invert krna hy yaad rahe ke ye matrix 2-d hy

let flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image.length; j++) {
      if (image[i][j] === 0) {
        image[i][j] = 1;
      } else if (image[i][j] === 1) {
        image[i][j] = 0;
      }
    }
  }
  return image;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // [[1,0,0],[0,1,0],[1,1,1]]
