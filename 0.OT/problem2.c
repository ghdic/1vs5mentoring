#include <stdio.h>

int main() {
    int n, m = 0;
    char c = 'A';
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = n - 1; j >= 0; j--) {
            if (i > j) {
                printf("%d ", m++);
            }
            else {
                printf("%c ", c++);
            }
        }
        printf("\n");
    }
    return 0;
}