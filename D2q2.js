/* Differences between "var" "let" and "const":
var is function scoped, let is block scoped and const is also block scoped.
var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared
Examples:
*/

//var
var a =10;
console.log(a);  
if(true){
   var a=20;
   console.log(a); 
}
console.log(a);

//let
function oflet()
{
    let a =100;
    console.log(a);  
    if(true)
    {
        let a=200;
        console.log(a); 
    }
    console.log(a);  
}
oflet();

//const
function ofconst()
{
    const myconst =1000;
    console.log(myconst);  
    myconst=2000;
    console.log(myconst);
}
ofconst(); 