#include<stdio.h>
#include<stdlib.h>
int main()
{
    int *mal = malloc(5*sizeof(int));
    int *cal = calloc(5,sizeof(int));
    printf("%d \n",mal[0]);
    printf("%d \n",cal[0]);
    printf("%d \n",cal[1]);
    printf("%d \n",cal[2]);
    printf("%d \n",cal[3]);
    printf("%d \n",cal[4]);
    printf("%d \n",cal[5]);
    printf("%d \n",cal[6]);




return 0;
}