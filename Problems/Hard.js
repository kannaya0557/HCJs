// Q1)Write a function sumArray that takes an array of numbers as 
// input and returns the sum of all the numbers.
//  Use a for loop and arithmetic operators for this calculation.
function SumofArray(arr)
{
    let total=0;
    for(let i=0;i<arr.length;i++)
    {
        total+=arr[i];
    }
    return total;
}
let arr1=[1,2,3,4,5];
console.log(SumofArray(arr1))

