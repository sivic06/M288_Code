let clothes = [{
    type: "pullover",
    colour: 'red',
    size: 'xl'
},{
    type: "t-shirt",
    colour: 'yellow',
    size: 's'
},{
    type: "t-shirt",
    colour: 'pink',
    size: 's'
},{
    type: "trousers",
    colour: 'blue',
    size: 'xxl'
}];
//function that returns an object literal
let getSummary = function (cloth) {
    return {
        summary: `Das Kleid \"${cloth.colour}\" hat die Grösse ${cloth.size}`,
        colour: `Der Kleid \"${cloth.colour}\" hat die Grösse ${cloth.size}.`
    }
}


/*for (let index=0;index < clothes.length;index++){
    let obj1 = getSummary(clothes[index]);
    console.log(`${obj1.summary}. ${obj1.colour}`);
}*/

let filteredCloths = clothes.filter((kleid) => {
    //return kleid.size === 's';
    return kleid.onStock === false;
});


// try {
//     console.log(filteredCloths);
// } catch (e){
//     console.error(e)
// }

console.log(filteredCloths);

