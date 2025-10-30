// 735. Asteroid Collision

// Problem statement

// We are given an array asteroids of integers representing asteroids in a row. The indices of the asteroid in the array represent their relative position in space. For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed. Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Understand the problem first

// hme aik array di gai hai jisme positive aur negative integers hain. Positive integers right direction mein move kar rahe hain aur negative integers left direction mein. Jab do asteroids takraate hain, to chhota asteroid explode ho jaata hai. Agar dono asteroids ka size barabar hai, to dono explode ho jaate hain. Humein final state of asteroids find karni hai after all collisions.

// Approach and Solution

// hum stack ko use kre ge aur har asteroid ko check kre ge. Agar current asteroid positive hai, to hum use stack mein push kr denge. Agar current asteroid negative hai, to hum stack ke top element ko check kre ge. Agar top element positive hai, to collision hoga. Hum dono asteroids ka size compare kre ge aur decide kre ge ki kaun explode hoga. Yeh process tab tak chalega jab tak stack empty na ho jaye ya current asteroid explode na ho jaye.

var asteroidCollision = function (asteroids) {
    let stack = [];
    for (let ast of asteroids) {
        while (stack.length > 0 && stack[stack.length - 1] > 0 && ast < 0) {
            let sum = ast + stack[stack.length - 1];

            if (sum < 0) {
                stack.pop();
            } else if (sum > 0) {
                ast = 0;
            } else {
                stack.pop();
                ast = 0;
            };
        };

        if (ast !== 0) {
            stack.push(ast);
        };
    };
    return stack;
};

console.log(asteroidCollision([1,2,3,-4,-3])); // [ -4, -3 ]