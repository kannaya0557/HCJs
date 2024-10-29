// Q1)Declare a variable temperature with let and assign it a value. 
// Check if it’s more than 30, and if so, print "Hot Day"; otherwise, print "Cool Day".

let temperature =40;
let result=(temperature>30)?"Hot Day ":"Cool Day";
console.log(result);

//Q2) Write a function isEven that takes a number as input and returns
//  "Even" if the number is even and "Odd" if the number is odd.

let num=40;
let result1=(num/2==0)?"odd":"even";
console.log(result1)

//Q3)Write a function celsiusToFahrenheit that takes a temperature in
// Celsius and converts it to Fahrenheit. The formula is: F = C * (9/5) + 32.

function CelsiusToFarhrenheit(Celsius)
{

    let Fahrenheit= Celsius *(9/5)+32;
    console.log("celsius "+ Celsius+"is successfullt converted to Fahrenheit "+Fahrenheit)

}
let Celsius=300;
console.log(CelsiusToFarhrenheit(Celsius))

//Q4) Write a function isPrime that takes a number
// and returns true if the number is prime and false otherwise.

function checkPrime(num)
{
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
            return false;
    }
    return true;

}
console.log(checkPrime(5))