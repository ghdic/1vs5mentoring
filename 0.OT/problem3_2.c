// 방법2: 에라토스의 체를 활용
#include <stdio.h>
#include <math.h>

int prime[1000001];

int main() {

    int n, m;

    scanf("%d %d", &n, &m);

    prime[1] = 1;
    for (int i = 2; i <= (int)sqrt(1000000); i++) {
        if (prime[i] == 0) {
            for (int j = i + i; j <= (int)1000000; j += i) {
                prime[j] = 1;
            }
        }
    }

    int cnt = 0;

    for (int i = n; i <= m; i++) {
        if (prime[i] == 0)
            cnt++;
    }

    printf("%d\n", cnt);

    return 0;
}