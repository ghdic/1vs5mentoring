// 방법1 : 소수판별 함수를 짠다
#include <stdio.h>
#include <cmath>

int isPrime(int num) {
    if (num == 1)return 0;

    for (int i = 2; i <= (int)sqrt(num); i++) {
        if (num % i == 0)return 0;
    }

    return 1;
}

int main() {

    int n, m;

    scanf("%d %d", &n, &m);

    int cnt = 0L;
    for (int i = n; i <= m; i++) {
        if (isPrime(i))
            cnt++;
    }
    printf("%d\n", cnt);
    return 0;
}