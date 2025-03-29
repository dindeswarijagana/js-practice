let num1=6;
let num2=5;
let lcm=0;
let hcf=0;
let divisor=0;
let dividend=0;
let rem=0;
if(num1<num2){
    divisor=num1;
    dividend=num2;
}
else{
    divisor=num2;
    dividend=num1;
}
while(divisor>0){
    rem=dividend%divisor;
    lcm=dividend+lcm;
    dividend=divisor;
    divisor=rem;
}
hcf=dividend;
console.log(lcm);
console.log(hcf);