// 946. Validate Stack Sequences

// Problem statement

// Given two integer arrays pushed and popped each with distinct values, return true if this could have been the result of a sequence of push and pop operations on an initially empty stack, or false otherwise.

// Understand the problem first

// hmare pas do array of ints hy pushed aur popped ke hum ne true return krna hy agr wo push aur pop ke operation ke nataij hy empty stack per. warna false 

// Solution

// simply ye ke aik empty stack me push ke element ko push kr ke chk kre ge ke popped ka array of ints ki sequence wahi bnti hy ke jb usko pop kia jaye. agr pure pure operation ho jaye tu mtlb stack empty aur wo true return ho ga

var validateStackSequences = function (pushed, popped) {
    let stack = [];
    let index = 0;
    for (num of pushed) {
        stack.push(num);
        while (stack.length && stack[stack.length - 1] === popped[index]) {
            stack.pop();
            index += 1;
        };
    };
    return stack.length === 0;
};


console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, ])); // false
