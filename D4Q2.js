const student={
    name: "Helsinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using JavaScript"
    }
}
const { name,age,projects:{diceGame}}=student;
const dstrc=`${name} is a ${age} years old student.\n`
+`His project is named as ${diceGame}`;
console.log(dstrc);