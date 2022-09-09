var a =Math.round(Math.random() * 3);
var b =Math.round(Math.random() * 3);

console.log(a);
console.log(b);

function sum(a,b) {
    if (a > b) {
       return a+" er større enn tall "+ b;
    } else if (a < b) {
       return b+" er større enn tall "+a;
    } else if (a == b) {
       return " tall 1 er lik tall 2";
    }
}
console.log(sum(a,b));

