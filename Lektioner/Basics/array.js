//En array tillsätts värde med []

index=Math.floor(Math.random()*3)

let fruits=["äpple", "päron"];

console.log(fruits[index]); //äpple = 0, man börjar räkna vid 0
fruits[2]="kiwi"
console.log(fruits[2]);
console.log(fruits);
fruits.push("banana"); //pushar in i slutet av arrayn []
console.log(fruits);

//shift() och pop() tar ut första(shift)/sista(pop) ordet i arrayn
let eatFruit=fruits.shift();
console.log(eatFruit);
console.log(fruits);

//Andra array metoder: reverse() sort() slice() concat()