// 1491. Average Salary Excluding the Minimum and Maximum Salary

// Problem statement

// You are given an array of unique integers salary where salary[i] is the salary of the ith employee. Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.

// Understand the problem first

// hmare pas aik array of int salaries ke name se hy jo ke unique integers ki ho gi. Us me hr emplyee ki aik salary hy hum ne average salary nikalni hy min and max ko exclude kr ke.

// Solution

// sb se pehle tu min aur max salary ko nikal le ge. iske bad aik array bnae ge ke jis me min and max salary nahi ho gi.

var average = function (salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = salary[0];
    for (let i = 1; i < salary.length; i++) {
        if (salary[i] > max) max = salary[i];
        if (salary[i] < min) min = salary[i];
        sum += salary[i];
    }
    sum = sum - (min + max);
    return Number((sum / (salary.length - 2)).toFixed(5));

    // let minSalary = Math.min(...salary);
    // let maxSalary = Math.max(...salary);
    // let filtered = salary.filter(sal => sal !== minSalary && sal !== maxSalary);
    // let sum = filtered.reduce((acc, curr) => acc + curr, 0);
    // return Number((sum / filtered.length).toFixed(5));
};
console.log(average([1000, 4000, 8000, 7000])); // 5500.00000
console.log(average([4000, 3000, 1000,])); // 2500.00000
