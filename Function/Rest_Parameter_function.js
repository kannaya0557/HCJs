//The rest parameter syntax allows a function to accept an indefinite number
//number of arguments as an array,providing as an arary.
function sum(...theArgs)
{
let total=0;
for(const arg of theArgs){
total+=arg;
}

return total;
}
console.log(sum(1,2,3,4));//10
console.log(sum(52,57));//109