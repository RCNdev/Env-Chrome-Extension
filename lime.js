document.title = "lime — " + document.title;

const el = document.createElement("span");

el.innerHTML = "lime";
el.id = "env-label";
el.style.color = "lime";

document.body.appendChild(el);
