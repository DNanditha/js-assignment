
var num=window.prompt("Enter a number");
console.log("The number entered is "+num+" and number is "+evenOrodd(num));
function evenOrodd(num)
{
    isEven=num%2;
    if(isEven==0)
        return "even";
    else
        return "odd";
}