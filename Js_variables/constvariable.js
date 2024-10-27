const name="venu";
//name="madhav" Error: Assignment to constant variable
const person={age:24};
person.age=25;//This is allowed as we are modifying the object,not reassigning the variable.
console.log(person.age);//output:25