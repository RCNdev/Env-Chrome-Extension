document.title = 'amber — ' + document.title;

const el = document.createElement('span');

el.innerHTML = 'amber';
el.id = 'env-label';
el.style.color = 'gold';

document.body.appendChild(el);
