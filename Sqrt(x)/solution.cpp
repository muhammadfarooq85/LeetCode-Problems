// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator.

// Understand the problem first

// hme aik non-negative mtlb positive int dia gia hy hum ne uska nearest square root return krna hy. Aur jo int return kre ge wo bi non-negative hona chahie. aur apne koi inbuilt exponent finction use nahi krna.

// Solution

// Agar number 0 ya 1 ho to uska square root wahi hota hai → directly return kar do. Baaki numbers ke liye hum binary search ka use karte hain.


#include <iostream>
using namespace std;

int mySqrt(int x)
{
    // means 0 and 1 sqrt is also that integer means 0 and 1
    if (x < 2)
    {
        return x;
    };
    int left = 1;
    int right = x;
    while (left <= right)
    {
        int mid = left + (right - left) / 2;
        int temp = x / mid;
        if (temp == mid)
        {
            return mid;
        }
        else if (temp < mid)
        {
            right = mid - 1;
        }
        else if (temp > mid)
        {
            left = mid + 1;
        };
    };
    return left - 1;
};

int main()
{
    int x = mySqrt(3);
    cout << x << endl;
    return 0;
}