document.title = "lime | " + document.title;

const el = document.createElement("span");

el.innerHTML = "lime";
el.id = "env-label";
el.style.backgroundColor = "lime";

document.body.appendChild(el);
