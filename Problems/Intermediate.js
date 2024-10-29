// Q1)Write a function that takes two numbers, num1 and num2, 
// and returns the larger number using the ternary operator.

function checkLargeNum(num1,num2)
{
    result=(num1>num2)?num1:num2;
    return result;
}
console.log(checkLargeNum(2,3));
//Q2Write a function reverseString that takes a string and returns it in reverse order.
function reverseString(str)
{
    let reversed="";
        for(let i=str.length-1;i>=0;i--)
        {
            reversed+=str[i];
        }
        return reversed;
}
console.log(reverseString("venu"));

//Q3Write a function reverseString that takes a string and returns it in reverse order.

function largestNumberArray(arr){
    let largest=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>largest)
            {
                largest=arr[i];
            }
        }
        return largest;

}
let arr=[1,62,3,4];
console.log(largestNumberArray(arr))

