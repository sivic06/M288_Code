
/* Teil 1 */
let icons = document.getElementsByClassName('fa');
console.log(icons);
console.log(icons[0]);
console.log(icons[1]);

for(let i = 0; i < icons.length; i++) {
    console.log(icons[i]);
}

// icons.push('Hello');
 var iconsArr = Array.from(icons);
 console.log(iconsArr);
 console.log(icons);

iconsArr.push("Hello");
console.log(iconsArr);

/* Teil 2 */
// var icons = document.getElementsByClassName('fa');

// Array.from(icons).forEach(function(icon, index, arr) {
//     console.log(icon, index, arr);
// });

let lis = document.getElementsByTagName('li');
console.log(lis);



/* Teil 3 */
lis = document.querySelectorAll('li, h2, #hide-list');
console.log(lis);
// // lis.push('Hello');

// lis.forEach(function(li) {
//     console.log(li);
// });

Array.from(lis).forEach(function(li) {
    li.textContent = "Hello World";
});







