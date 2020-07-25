const title = document.getElementById('title');
console.log(title.innerText);
const name = prompt("Enter your name","Anonymous");
title.innerText += ` Welcome ${name}`;
const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
clock();
setInterval(clock,1000);
const dmode = document.getElementById('dark');

dmode.onclick = function changeColor(){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
   
}
const para = document.getElementsByClassName('imp');

console.log(para);

const data = document.getElementsByTagName('p');

console.log(data);

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element)
    
}


console.log(document.querySelector('.imp'));

const data1 = document.querySelectorAll('.imp');
//const data1 = document.querySelectorAll('p');
console.log(data1);

data1.forEach(el=>{
    console.log(el);
})


const attr = document.getElementById('attribute');

console.log(attr.getAttribute('id'));

attr.setAttribute('style','color:red;');
attr.setAttribute('style','background-color:blue');

attr.classList.add('blue');
attr.classList.add('bgYellow');
attr.classList.remove('blue');
attr.classList.toggle('blue');
attr.classList.toggle('blue');


attr.style.color = "red";
attr.style.backgroundColor = "yellowgreen";
attr.style.backgroundColor = "";

