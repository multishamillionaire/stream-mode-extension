const matches = document.querySelectorAll("div");
const divCount = [...matches].length;

const badge = document.createElement("p");
  badge.setAttribute("style", "position: absolute; z-index: 999999; border:2px solid red; background-color: rgb(255, 125, 115);");
  badge.textContent = `⏱️ ${divCount} div count`;
 
const body = document.querySelector("body");

if (body) {
	body.insertAdjacentElement("beforebegin", badge);
}
else {
	console.log("не взлетело!");
}