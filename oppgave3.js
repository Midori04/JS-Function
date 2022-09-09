var a = Number (prompt("Skriv et tall:"));
var b = Number (prompt("Skriv et tall:"));
var mittRN = Math.round(Math.random() * 100);

console.log(mittRN, a, b);


function create(a, b, mittRN) {

    while (mittRN < a || mittRN > b) {
        var mittRN = Math.round(Math.random() * 100);
        // console.log(mittRN, a, b);
        if (mittRN > a && mittRN < b) {
            break;
        }
    } 

    return mittRN;
   
}
    
console.log(create(a, b, mittRN));