document.title = "local | " + document.title;

const el = document.createElement("span");

el.innerHTML = "local";
el.id = "env-label";
el.style.backgroundColor = "skyblue";

document.body.appendChild(el);
