console.log(document.getElementById('list'));

let el = document.getElementById('list');
console.log(el);
console.log(typeof el);

// let el = document.getElementById('LIST');
// console.log(el);

console.log(el.textContent);
console.log(el.textContent = 'Hello');

let heading = document.getElementById('heading').textContent;
console.log(heading);

let ulElement = document.getElementById('list');
console.log(ulElement.textContent = heading);

console.log(el.innerHTML);
console.log(el.innerHTML = 'Hello');
console.log(el.innerHTML = '<h1>Hello</h1>');
console.log(el.textContent = '<h1>Hello</h1>');















