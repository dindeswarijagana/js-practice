let nterm=7,count=2;
let n1=0,n2=1,n3=0;
    console.log(n1);
    console.log(n2);
while(count<nterm){
    n3=n1+n2;
    console.log(n3);
    n1=n2;
    n2=n3;
    count++;
}