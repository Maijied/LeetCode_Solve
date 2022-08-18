#include<bits/stdc++.h>
using namespace std;


string add(string a, string b){
    string result = "";
    int sum = 0;
    int getSizeOfA = a.size()-1;
    int getSizeOfB = b.size()-1;

    while(getSizeOfA >= 0 || getSizeOfB >= 0 || sum == 1){
        sum += ((getSizeOfA >= 0)? a[getSizeOfA]-'0':0);
        sum += ((getSizeOfB >= 0)? b[getSizeOfB]-'0':0);
        result = char(sum % 2 + '0') + result;
        sum /= 2;
        getSizeOfA--;
        getSizeOfB--;
    }
    return result;

}

int main(){
   string a = "1010", b="1011";
   cout<<"sum of binary are : "<< add(a, b);
   return 0;
}
