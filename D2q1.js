//Console
/*It is a tool which is mainly used to log information associated with a web page like n/w requests,javascript,sexurity errors,warnings,Css, etc. 
It enables us to interact with a web page.
There are different methods in console object and they are as follows:
1. log()
2. error()
3. warn()
4. clear()
5. time() and timeEnd()
6. table()
7. count()
8. groupt()

1. log()
    It is used to log the output to the sonsole. Any data types can be put inside this method.
Examples:    */
console.log('LetsUpgrade');
console.log(1,2,3);
console.log(true);
console.log(null);
console.log(undefined);
console.log([1,2,3]);

/*
2. error()
    It is used to log the error message to the console.
    By default the eror message will be highlighted. (in red color).
Examples:    */

console.error('This is an error message');

/*
3. warn()
    It ois used to log the warning message to the console.
    By default the warning message will be displayed in yellow color.
Example:   */
console.warn('This is a warning message');

/*
4. clear()
    It is used to clear the console. 
    The console will be cleared in case of Chrome a simple overlayed text will be printed like: 'Console was cleared' while in normal firefox or browser no message will be returned.
Example:    */
console.clear();

/*
5. time() and timeEnd()
    Whenever we want to know the amount of time spend by a block or a function, we can make use of the time() and timeEnd() methods provided by the javascript console object. 
    They take a label which must be same, and the code inside can be anything( function, object, simple console).
Example:    */

console.time('abc'); 
let fun =  function(){ 
     console.log('fun is running'); 
 } 
let fun2 = function(){ 
     console.log('fun2 is running..'); 
 } 
fun(); // calling fun(); 
fun2(); // calling fun2(); 
console.timeEnd('abc');

/*
6. table()
   This method allows us to generate a table inside a console. 
   The input must be an array or an object which will be shown as a table.
Example:   */

console.table({'Day1':'abc', 'Day2':'xyz'}); 

/*
7. count()
    This method is used to count the number that the function hit by this counting method.
Example:   */

for(let i=0;i<5;i++){ 
    console.count(i); 
} 

/*
8. group()
    group() and groupEnd() methods of the console object allows us to group contents in a separate block, which will be indented.
    Just like the time() and the timeEnd() they also accepts label, again of same value.
Example:    */

console.group('simple'); 
console.warn('warning!'); 
console.error('error here'); 
console.log('Day1 Day2'); 
console.groupEnd('simple'); 
console.log('new section'); 