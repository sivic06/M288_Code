function palindrome(str) {
    let result = str.split("").reverse().join("");
    if (result === str){
        return true;
    } else {
        return false;
    }

}


let data = [
    ["eye", true]
];
for (let i=0;data.length;i++){
    console.assert(
        palindrome(data[i][0]) === data[i][1],
        {palindrom_result: palindrome(data[i][0]), expected: data[i][1]});
}
