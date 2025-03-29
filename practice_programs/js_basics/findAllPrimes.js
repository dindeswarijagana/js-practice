// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 1;
const endOfRange = 10;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let number=startOfRange;
let divisor=1;
let factorsCount=0;
for(number;number<=endOfRange;number++){
    while(divisor<=number){
        if(number%divisor==0){
           factorsCount++;
        }
    divisor++;
}
if(factorsCount==2){
    console.log(number);
}
divisor=1;
}


