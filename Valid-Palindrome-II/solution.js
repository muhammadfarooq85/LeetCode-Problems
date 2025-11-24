// 680. Valid Palindrome II

// Problem statemet:

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Understand the problem first:

// palindrome aik aesa string hota hai jo aage se padhne par aur peeche se padhne par same hota hai. Jaise "racecar" ya "madam". Humein check karna hai ki kya hum ek character delete karke string ko palindrome bana sakte hain.

// Approach and Solution:

// hum simple two pointers technique use karenge. Ek pointer string ke start se chalega aur doosra end se. Agar dono pointers par characters same hain, toh hum dono pointers ko aage badha denge. Agar characters different hain, toh hum do possibilities check karenge: ek mein left pointer ko aage badha kar aur doosre mein right pointer ko peeche le jaakar. Agar kisi bhi case mein bachi hui substring palindrome ban jati hai, toh hum true return karenge. Agar dono cases fail ho jate hain, toh false return karenge.

// helper function to check if a substring is palindrome
var isPalindrome = function (s, left, right) {
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) ||
                isPalindrome(s, left, right - 1);
        }
    }

    return true;
};

console.log("aba"); // true 
