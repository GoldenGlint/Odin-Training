const container=document.querySelector("#container");
const paragraph=document.createElement("p");
paragraph.textContent="I am red!";
paragraph.style.color="red";
container.appendChild(paragraph);

const h3=document.createElement("h3");
h3.textContent="I'm a blue h3";
h3.style.color="blue";
container.appendChild(h3);

const divObj=document.createElement("div");
divObj.setAttribute("style", "border-style:black; background:pink");

const h1=document.createElement("h1");
h1.textContent="I'm in a div";

const p2=document.createElement("p2");
p2.textContent="ME TOO!";
divObj.appendChild(h1);
divObj.appendChild(p2);
container.appendChild(divObj);
