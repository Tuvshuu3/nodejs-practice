/*
Дараах хэрэглэгчийн функцуудыг гүйцээж бичээрэй.
**/
#include <iostream>

using namespace std;

int is_prime(int n) {
    // n тоо анхны тоо мөн бол 1 үгүй бол 0 утга буцаана.
    if (n <= 1 || n % 2 == 0){
        return 0;
    }

    if (n == 2) {
        return 1;
    }

    for (int i = 3; i * i <= n; i = i + 2){
        if (n % i == 0) 
            return 0;
    }
    return 1;
}

long long power(long long a, long long b, long long m) {
    long long hariu = 1;
    while (b > 0){
        hariu = hariu * a;
        b = b - 1;
    }
    long long answer = hariu % m;

    return answer;
    // a тооны b зэргийг m-д хуваасан үлдэгдлийг олж буцаана
}

int gcd(int a, int b) {     // а, b хос тооны хамгийн их ерөнхий хуваагчийг олох
    int c;
    int i = 1;
     while (a >= i && b >= i){
        if (a % i == 0 && b % i == 0){
            c = i;
            i += 1;
        }

        else {
            i+=1;
        }
    }
    return c;
}

long long fact(long long n){
    // n-ийн факториалыг олж буцаана
    if (n <= 1) return 1;
    else return n * fact(n - 1);

    return 0;
}


int count(int n, int p) {
    // 1 2 3 4 5 6 7 8 9  ==   3
    int temp = 0;

    for(int i = 1; i <= n; i++){
        int j = i;
        while(j % p == 0) {
            temp++;
            j = j / p;
        }
         
    }

    return temp;
    //const fact ashiglahgu 
    // n! буюу n-ийн факториалыг өгсөн p анхны тоо хэдэн удаа хувааж байгааг олоод буцаана.
}

long long comb(int n, int k) {
    //C5 iin 2 gevel 5! / 2! * 3!
    // n ялгаатай бөмбөгнөөс к ширхэгийг нь сонгож авах боломжийн тоог олж буцаана
    return 0;
}

int phi(int n) {
    //Euler's φ (phi) Function counts the number of positive integers not exceeding n and relatively prime to n.
    // Өгсөн тооноос бага түүнтэй харилцан анхны тоо хэд байгааг олж буцаана.
    return 0;
}


int main() {
    // long long a, b, m;

    // cin >> a >> b >> m;
    // // call functions
    // long long d = power(a, b, m);
    // cout << d << endl;

    // int a, b;
    // cin >> a >> b;

    // int d = gcd(a, b);

    // cout << d << endl;

    // return 0;

    int a, b;
    cin >> a >> b;

    int d = count(a, b);

    cout << d << endl;

    return 0;
}