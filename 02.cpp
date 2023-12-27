// C++ code to demonstrate the
// __builtin_popcount function
#include <bits/stdc++.h>
 
using namespace std;
 
int main()
{
 
    int n = 20;
 
    // Printing the number of set bits in n
    cout << __builtin_popcount(n);
 
    return 0;
}