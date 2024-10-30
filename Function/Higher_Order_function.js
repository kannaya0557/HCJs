//A High order function is function that takes another function as an argument or returns a function.
function applyFunction(arr,func)
{
    return arr.map(func)
}
const square=x=>x*x;
console.log(applyFunction([1,2,3,4],square))