#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);
    for (int i = n - 1; i >= 0; i--) {
        for (int j = 0; j < n; j++) {
            if (i <= j) {
                printf("%d ", j - i + 1);
            }
            else {
                printf("  ");
            }
        }
        printf("\n");
    }
    return 0;
}