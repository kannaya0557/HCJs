//AND Bitwise Operator
let a=5;
let b=3;
console.log(a&b);//1
function checkOddorEven(n)
{
    if(n&1==1)
    {
        return "Number is odd";
    }
    return "Number is Even";
}
console.log(checkOddorEven(123));//Number is odd
console.log(checkOddorEven(246));//Number is even

//OR Bitwise Operator
a=3;b=5;
console.log(a | b);//7

//XOR Bitwise Operator
a=5;b=4;
console.log(a^b);//1

//NOT Bitwise Operator
console.log(~24);//-25
console.log(~10);//-11
console.log(~-10);//9

//Left Shift Bitwise Operator
let A = 6; // Binary: 110
let B = 1; // Binary: 001
let resultLeftShift = A << B; 
console.log(resultLeftShift);// Result: 1100 (binary) = 12 (decimal)

//Right Shift Bitwise Operator
a=4;
b=-32;
console.log(a>>1);//2
console.log(b>>4);//-2

//Zero Fill Right Shift Bitwise Operator

a=4;
b=-1;
console.log(a>>>1);//2
console.log(b>>>4);//34


