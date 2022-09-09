// function sum(num1, num2) {
//     return num1 + num2   
// }

// function minus(num1, num2) {
//     return num1 - num2   
// }
// function gange(num1, num2) {
//     return num1 * num2    
// }

// function dele(num1, num2) {
//     return num1 / num2    
// }
    
var a = Number(prompt("skriv et tall"));
var symbol = (prompt("skriv inn symbol"))
var b = Number(prompt("skriv et tall til"));
var sum6 = function (a, b, symbol) {

    if (symbol == "+")
    return (a + b);

    if (symbol == "-")
    return (a - b);

    if (symbol == "*")
    return (a * b);

    if (symbol == "/")
    return (a / b);
}

console.log(sum6(a, b, symbol));




