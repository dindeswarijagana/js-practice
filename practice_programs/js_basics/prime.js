let num=8,i=1,count=0;
while(i<=num){
    if(num%i==0){
        count++;
    }
    i++;
}
if(count==2){
    console.log("is a prime ");
}
else{
    console.log("not a prime ")
}
