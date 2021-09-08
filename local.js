document.title = "local — " + document.title;

const el = document.createElement("span");

el.innerHTML = "local";
el.id = "env-label";
el.style.color = "deepskyblue";

document.body.appendChild(el);
