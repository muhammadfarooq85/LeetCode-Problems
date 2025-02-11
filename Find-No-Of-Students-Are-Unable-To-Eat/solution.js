// 1700. Number of Students Unable to Eat Lunch

// Problem statement

// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:
// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end. This continues until none of the queue students want to take the top sandwich and are thus unable to eat. You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

// Understand the problem first...

// schoola ka jo cafeteria hy wo do trah ke sandwiches offer kr raha hy aik circular aur doosra square aur suko 0 aur 1 se respectively refer kr rahe hy. Ntlb circular ko 0 aur square ko 1 keh rahe hy. hr student ya tu circular le skta hy ya square sandwich. jo no of sandwiches hy wo no of stidents ke equal hy. Students qeue me hy aur sanwiches stack aur hr student stack ke top wala sandwiche mang raha hy. agr mil jata hy tu jo wo keh rahe hy wahi top per hy tu stack me se wo sandwich aue qeue se wo student remove ho haye ga. agr student ka expected sandwich nahi milta tu wo qeue means Qatar ke end pe chla jaye ga. ye process chlta rahe ga tb tk jb tk ke top wala sandwich mil na jaye. hme do array of integers dia jaye ge aik students ka aur doosra sandwiches ka. hme ye pta kr ke return krna hy ke kitne students sandwich milne se rahe gaye hy.

// Solution

// is problem ko hal krne liye hme stack aur qeue data structure ka pta hona chahie.

let countStudents = function (students, sandwiches) {
  let count = 0;
  while (students.length !== 0) {
    console.log("studnts length is ", students.length);

    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      count = count + 1;
      students.push(students.shift());
    }
    console.log("count is ", count);

    if (count == students.length) {
      return count;
    }
  }
  return 0;
};

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
