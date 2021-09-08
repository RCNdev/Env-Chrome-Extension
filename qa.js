document.title = "qa — " + document.title;

const el = document.createElement("span");

el.innerHTML = "qa";
el.id = "env-label";
el.style.color = "hotpink";

document.body.appendChild(el);
