/*Data types basically specify what kind of data can be stored and manipulated within a program.
There are six basic data types in JavaScript which can be divided into three main categories: 
1. primitive (or primary) --- String, Number, and Boolean are primitive data types.
2. composite (or reference) ---  Object, Array, and Function (which are all types of objects) are composite data types. 
3. special data --- Undefined and Null are special data types.
*/ 

/*Strings
The string data type is used to represent textual data (i.e. sequences of characters). 
Strings are created using single or double quotes.
*/
var str1 = 'Hi there!';  
var str2 = "Hi there!!!!!";
console.log(str1,str2);

/*Numbers
The number data type is used to represent positive or negative numbers with 
or without decimal place, 
or numbers written using exponential notation. 
*/
var a = 25;         // integer
var b = 80.5;       // floating-point number
var c = 4.25e+6;    // exponential
console.log(a,b,c);

/*Boolean
The Boolean data type can hold only two values: true or false. 
It is typically used to store values like yes (true) or no (false)
*/ 
var isNumber_1=true;
console.log(isNumber_1);
var isNumber_a=false;
console.log(isNumber_a);

/*Object
The object is a complex data type that allows you to store collections of data.
An object contains properties, defined as a key-value pair.
*/
var person = {"name": "Bhima", "surname": "Rao", "age": "22"};
console.log(person);

/*Array
An array is a type of object used for storing multiple values in single variable. 
Each value in an array has a numeric position, known as its index, and it may contain data of any data type-numbers, strings, booleans, functions, objects, and even other arrays. 
The array index starts from 0
*/
var arr1 = ["Red", 1, "has", 99.99,true];
console.log(arr1);

/*Function
The function is callable object that executes a block of code.
Since functions are objects, so it is possible to assign them to variables
*/
var me=function(){
    return "Hi LetsUpgrade"
}
alert(me);
console.log(typeof(me));

/*Undefined
The undefined data type can only have one value-the special value undefined. 
If a variable has been declared, but has not been assigned a value, has the value undefined.
*/
var p;
console.log(p);

/*Null
This is another special data type that can have only one value-the null value. 
A null value means that there is no value. 
A variable can be explicitly emptied of its current contents by assigning it the null value.
*/ 
var g=null;
var h="hello";
console.log(g);
console.log(h);
h=null;
console.log(h);