document.title = "orange — " + document.title;

const el = document.createElement("span");

el.innerHTML = "orange";
el.id = "env-label";
el.style.color = "orange";

document.body.appendChild(el);
