//AND Operator
console.log(true&&false);//false
console.log(true&&true);//true
console.log(1 && 0);//0
console.log(1 && 2);//2
console.log("1" && true);
console.log("0" && true);

function a()
{
    return true;
}
function b()
{
    return true;
}
console.log(a() && b());//true

//Logical OR OPerator

console.log(true || false);//true
console.log(false || false);//false
console.log(1 || 0 );//1
console.log(1 || 2 );//1
console.log("1" || true);//1
console.log("0" || true);//0

function a()
{
    console.log("welcome")
    return true;
}
function b()
{
    console.log("Hello")
    return false
}
console.log(a() || b());//welcome true

//Logical NOT Operator

console.log(!true);//false
console.log(!false);//true
console.log(!"1");//false
console.log(!"");//true
console.log(!null);//true
console.log(!!true);//true

