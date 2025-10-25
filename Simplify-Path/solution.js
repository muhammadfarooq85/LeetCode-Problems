// 71. Simplify Path

// Problem statement

// You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Your task is to transform this absolute path into its simplified canonical path.

// Understand the problem first

// hme aik complex way aik path di ho gi string me hum ne just path ko simplify krna hy

// Approach and Solution

// aik stack create kre ge jis me hum just valid directory names ko push kre ge agr '..' aya to pop kr de ge agr . ya empty string aya to kuch ni krna. end pr stack me jo directory file ke name ho ge un ko simplify kre ge

var simplifyPath = function (path) {
  let splittedPath = path.split("/");

  let stack = [];
  for (let str of splittedPath) {
    if (str === "" || str === ".") {
      continue;
    } else if (str === "..") {
      stack.pop();
    } else {
      stack.push(str);
    }
  }
  let ans = "";
  for (let st of stack) {
    ans = ans + "/" + st;
  }

  if (ans === "") {
    return "/";
  }
  return ans;
};

console.log(simplifyPath("/home//foo/")); // /home/foo
