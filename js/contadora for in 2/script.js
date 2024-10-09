const person ={fname:"Mariana", lname:"Fernandes Lopes", age:"18"};

let txt = " ";
for (let x in person){
    txt += person[x] + " ";
}
console.log(txt)