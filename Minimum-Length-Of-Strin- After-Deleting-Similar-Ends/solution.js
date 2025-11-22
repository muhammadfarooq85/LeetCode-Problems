// 1750. Minimum Length of String After Deleting Similar Ends

// Problem statemet:

// Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:
/*
Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
The prefix and the suffix should not intersect at any index.
The characters from the prefix and suffix must be the same.
Delete both the prefix and the suffix.
Return the minimum length of s after performing the above operation any number of times (possibly zero times).
*/

// Understand the problem first:

// hme aik string di gai hai jisme sirf 'a', 'b', aur 'c' characters hain. Humein is string par ek algorithm apply karna hai jisme hum prefix aur suffix ko delete karte hain agar wo same characters se bane hain aur intersect nahi karte. Humein ye find karna hai ki kitni minimum length bachegi string ki after applying this operation any number of times.

// Approach and Solution:

// hum do pointers use karenge, ek start pointer jo string ke beginning se shuru hoga aur ek end pointer jo string ke end se shuru hoga. Hum dono pointers ko move karenge jab tak wo same characters par hain aur intersect nahi karte. Jab tak wo same characters par hain, hum unhe skip karte rahenge. Jab wo different characters par pahunch jate hain ya intersect kar jate hain, hum remaining length calculate karenge.

var minimumLength = function (s) {
    const n = s.length;
    let i = 0, j = n - 1;

    while (i < j && s[i] === s[j]) {
        const ch = s[i];

        while (i < j && s[i] === ch) {
            i++;
        }

        while (j >= i && s[j] === ch) {
            j--;
        }
    }

    return j - i + 1;
};

console.log("case 1:", minimumLength("ca")); // Output: 2
console.log("case 2:", minimumLength("cabaabac")); // Output: 0
console.log("case 3:", minimumLength("aabccabba")); // Output: 3
