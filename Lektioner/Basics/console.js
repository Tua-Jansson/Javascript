//Lektion 1 Javascript

//Skriver ut till konsolen
console.log("Hello World");

/*
Kommentar som går över flera rader.
Här är det också kommentar,

    och här
*/

//En variabel declareras med let går också att använda var men har det en annan scope
let namn="Leif";
console.log(namn);
let a=4;
let b=5;
let c;
let d="2"
c=a+b;
console.log(c);
console.log(namn+b); //concat
console.log(a/d); //automatisk type convertion
console.log(b/namn);

//Datatyper 
//String, Number (Integer, Double, Float), Boolean, object (null, undefined)
let num=0;
console.log(typeof(num));


//Variebel = ett värde som är förendeligt. Kan inte ändra värde på en konstant
const pieIsh = 3.14;


//Automatisk Type converition
//type converition Number() String() 
let place=54;
console.log(place);
console.log(place+2);
console.log(String(place)+2);