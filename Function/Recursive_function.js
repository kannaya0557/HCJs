//Recursive Function to Find Factorial:
//Recursive functions call themselves until a base condition is met.
function factorial(n)
{
    if(n<=1)return 1;
    return n* factorial(n-1);
}console.log(factorial(5));