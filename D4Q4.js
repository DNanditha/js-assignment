function dis(val)
{
    document.getElementById("calc").value+=val;
}
function solve()
{
    let x=document.getElementById("calc").value;
    let y=eval(x);
    document.getElementById("calc").value=y;
}
function clr()
{
    document.getElementById("calc").value=""
}