var today=new Date();
var day=today.getDay();
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is: "+daylist[day]+".");
var hour=today.getHours();
var minute=today.getMinutes();
var second=today.getSeconds();
var pre=(hour>=12)?"PM":"AM";
hour=(hour>=12)?hour-12:hour;
if(hour===0 && pre==='PM')
{
    if(minute===0 && second===0)
    {
        hour=12;
        pre='Noon';
    }
    else
    {
        hour=12;
        pre='PM';
    }
}
if(hour===0 && pre==='AM')
{
    if(minute===0 && second===0)
    {
        hour=12;
        pre='Midnight';
    }
    else
    {
        hour=12;
        pre='AM';
    }
}
console.log("Current time: "+hour+" "+pre+":"+minute+":"+second);