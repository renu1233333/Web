let query = document.querySelectorAll(".example ");


for (let i = 0; i < query.length; i++) {
    query[i].style.color = "red";
}


console.log(query);



// query.style.color = "red";


let query1 = document.querySelector(".firstpara");

console.log(query1)

query1.style.backgroundColor = "brown";
query1.innerHTML = "Hlooo"

document.write(query1.innerHTML)



let nodeList = document.querySelectorAll("h3");
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "red";
}

document.querySelector("h2").style.backgroundColor = "blue";

console.log(window.document.URL);
console.log(document.cookie)