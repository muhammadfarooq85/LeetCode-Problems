// 282. Expression Add Operators

// Problem statement:

// Given a string num that contains only digits and an integer target, return all possibilities to insert the binary operators '+', '-', and/or '*' between the digits of num so that the resultant expression evaluates to the target value. Note that operands in the returned expressions should not contain leading zeros. Note that a number can contain multiple digits.

// Understand the problem first:

// hme aik string diya hai jisme sirf digits hai aur ek target value diya hai. Hume ye dekhna hai ki hum is string ke digits ke beech mein '+', '-', aur '*' operators ko insert karke aise expressions bana sakte hain jo target value ke barabar ho.

// Approach and Solution:

// hum log is me bactracking approach use karenge. hum log recursively digits ke beech mein operators insert karenge aur har step par expression ko evaluate karenge. agar expression ka value target ke barabar ho jata hai, to us expression ko result list mein add kar denge. doosre lafzo me hr number ke liye hum log 3 options try karenge: '+', '-', aur '*'.

var addOperators = function(num, target) {
    const result = [];

    const backtrack = (index, expr, value, prev) => {
        // base case:
        console.log(expr)
        if (index === num.length) {
            if (value === target) {
                result.push(expr);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {
            if (i !== index && num[index] === '0') break;

            let str = num.substring(index, i + 1);
            let curr = Number(str);

            if (index === 0) {
                // First number (no operator)
                backtrack(i + 1, str, curr, curr);
            } else {
                // +
                backtrack(i + 1, expr + "+" + str, value + curr, curr);

                // -
                backtrack(i + 1, expr + "-" + str, value - curr, -curr);

                // *
                backtrack(
                    i + 1,
                    expr + "*" + str,
                    value - prev + prev * curr,
                    prev * curr
                );
            }
        }
    };

    backtrack(0, "", 0, 0);
    return result;
};

console.log(addOperators("123", 6)); // Output: ["1+2+3", "1*2*3"]
