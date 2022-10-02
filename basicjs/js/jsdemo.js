document.writeln("<h1>Chennai Express </h1>");
document.writeln(" <h2>" + (5 + 2) + "</h2>")

var num1;
document.writeln(num1)
var num1 = 36;
var num2 = "renu";
var num8 = "36";
if (num1 == num8) {
    document.write("true");
}

if (num1 === num8) {
    document.writeln("both having same type");
} else {
    document.write("Both are not same type");
}
document.writeln(num1 + num2);

var num3 = 4;
document.writeln(num1 + num3);



{
    var num3 = 8;
    document.write(num3);
}
const n = 10;

for (let i = 0; i < n; i++) {
    console.log(i)
}

if (num3 < num1) {
    document.writeln("greater");
}



// place = "Gadag";
// place = "Mysore";

console.log(22 + 336)


let place;
console.log(place);
place = "Gadag"
console.log(place);
place = "Mysore"
console.log(place);

const age = 23;
sum();

function sum() {
    console.log(age + " " + age)
    let place;
    // const age = 78;
    // console.log(age);
    console.log(place + " " + place);
    place = "Maharastra"
    console.log(place);


}




function outer(x) {


    function inner(y) {


        function inner1(z) {
            return (x + y + z);
        }

        let inn = inner1(3);
        return inn;


    }
    return inner(2);

}

// let totalSum = outer(2);
// console.log(totalSum);
// totalSum();

let expre = function() {
    console.log("Anonymous function")
}

console.log(expre);

expre();

let ex = function outer() {
    return function inner() {
        return 3 + 2;
    }
}

console.log(ex)
let innerEx = ex();
console.log(innerEx)
let express = innerEx();
console.log(express)


function add() {

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("result").value = sum;

}

function sub(num1, num2) {
    let sub = num1 - num2;
    alert(sub)
}

function mouseover() {

    console.log("over ")
}

function addtion() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let add = a + b;
    document.getElementById("res").value = add;
}

function substraction() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sub = a - b;
    document.getElementById("res").value = sub;
}

function multiplication() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let multiply = a * b;
    document.getElementById("res").value = multiply;
}


function division() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let div = a / b;
    document.getElementById("res").value = div;
}