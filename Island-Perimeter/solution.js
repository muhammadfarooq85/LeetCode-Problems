// 463. Island Perimeter

// Problem statement

// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Understand the problem first

// hme aik grid matrix dia gia hy jo ke map ko represent krta hy jaha kuch zero aur one ka map hy 0 water ko jbke 1 land ko represent kr raha hy hum ne island ke perimeter nikalne hy mtlb wo kitne kinare hy jaha island ki aik boundary milti hy

// Solution

// iske liye jo pehli cheeze mind me ari hy wo ye ke jaha land mile tu ans me 4 add kr do kyu ke aik square ki chaar sides hy lekin is trah se sahi jawab nahi ata hy ha aese hi kre ge lekin hum us ke right left bottom up dekhe ge kia aur land tu nahi overlap kr rahi hy. aur simply answer return kr de ge.

var islandPerimeter = function (grid) {
  let ans = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        ans += 4;
        if (i > 0 && grid[i - 1][j] === 1) {
          ans -= 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          ans -= 2;
        }
      }
    }
  }
  return ans;
};
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])); // 16
