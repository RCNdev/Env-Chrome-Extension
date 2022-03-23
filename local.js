document.title = 'local — ' + document.title;

const el = document.createElement('span');

el.innerHTML = 'local';
el.id = 'env-label';
el.style.color = 'hotpink';

document.body.appendChild(el);
