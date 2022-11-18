// 递归
function  sumTo(n) {
    if (n === 1) return 1;
    return n + Sum_Solution(n - 1)
}
//循环
function sumTo(n) {
     for (const i=0;i<=n;i++)
     {
         sum=sum+i;

     }
     console.log(sum);
}