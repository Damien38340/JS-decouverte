let input = "The owls are not what they seem";
let vowels = ["A", "E", "I", "O", "U"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    if (vowels.indexOf(input[i].toUpperCase()) !== -1) {
        resultArray.push(input[i]);
        console.log(i);
    }
}

console.log(resultArray.join(" ").toUpperCase());


// for (let i = 0; i < input.length; i++) {
//     if (vowels.includes(input[i].toUpperCase())){
//         resultArray.push(input[i]);
//         console.log(i);
//     }
// }