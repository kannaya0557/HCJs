
//Function with Default Parameters:
//Default Function Parameters can ber set default,which are used if no value is passed for the parameter.
function multiply(a=1,b=1)// default value 
{
    console.log( a*b);
}
multiply();//calling function with no parameters passing//(1)
multiply(52,57);//2964

function display_message(name="venu")
{
   console.log('Hello '+` ${name}!`)
}
display_message();
display_message('madhav')