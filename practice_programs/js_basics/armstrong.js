let num=1634;
let n=num;
let sum=0;
let r=0;
let digitCount=0;
let digit=0;
let armstrong=0;
while(n>0){
    r=n%10;
    n=n-r;
    n=n/10;
    digitCount++;
}
n=num;
while(n>0){
    r=n%10;
    n=n-r;
    n=n/10;
    digit=r**digitCount;
    sum=sum+digit;
}
if(sum==num){
    armstrong=1;
}
console.log(armstrong);