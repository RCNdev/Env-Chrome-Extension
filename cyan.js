document.title = 'cyan — ' + document.title;

const el = document.createElement('span');

el.innerHTML = 'cyan';
el.id = 'env-label';
el.style.color = 'cyan';

document.body.appendChild(el);
