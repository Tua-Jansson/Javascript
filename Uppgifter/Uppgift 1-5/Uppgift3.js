/* 1. Deklarera ett variabel alder där du slumpar fram ett tal 
mellan 0-100. Skriv ut olika meddelande med en IF-sats 
beroende på om användaren är under 18 eller ej.*/

let alder=Math.floor(Math.random()*100); 
console.log(alder);

if (alder>18){  
    console.log("Du är för gammal")
}else{
    console.log("Du är för ung")
}



/*2. Slumpa fram ett tal mellan 1-6. Skriv en switch som 
ger olika meddelande beroende på vilket tal det blev.*/

let randomTal=Math.floor(Math.random()*6)+1; 
console.log(randomTal);

switch(randomTal){
    case 1:
    console.log("Du vann c:");
    break; 

    case 2:
    console.log("Du kom på 2 plats c:");
    break; 

    case 3:
    console.log("Du kom på 3 plats c:");
    break; 

    case 4:
    console.log("Du kom på 4 plats c:");
    break; 

    case 5:
    console.log("Du kom på 5 plats c:");
    break; 

    case 6:
    console.log("Du kom på 6 plats c:");
    break; 
}



/* 3. Skriv for-loop som skriver ut heltalen för varje fall:

a. noll upp till din ålder*/

for(let i=0;i<18;i++){
    console.log(i);
}

/*b. din ålder ner till noll*/

for(let i=17;i>=0;i--){
    console.log(i);
}

/*c. 134 upp till 147*/

for(let i=134;i<148;i++){
    console.log(i);
}

/*d. jämna tal från 0 upp till 20*/

for(let i=0;i<21;i+=2){
    console.log(i);
}



/* 4. Definiera en Array som innehåller 5 namn. Skriv en for 
loop som skriver ut namnen i Arrayn.*/

let namn=["Liam", "Tove", "Fred", "Nathan", "Anton"];

for(let i=0;i<1;i++){
    console.log(namn);
}



/* 5. Definiera en variabel med ett långt ord som värde. Skriv 
en for-loop som med hjälp av charAT() fyller en array med 
bokstäverna ifrån ordet. Skriv en till for-loop som skriver 
ut bokstäverna en i taget från arrayn*/

let mrMango = "Mangornas-Mästare"; 
    

var mangoFunc = function (letter) {
    for (var i = 0; i < letter.length; i += 1) {
        console.log(letter[i].charAt(0));
    }
}

mangoFunc(mrMango);



/* 6. Skriv en for-loop som slumpar tal mellan 0-100 och sätter 
in de i en array. Sortera arrayn sedan från minst till störst. Skriv
ut den sorterade arrayn med en for-loop*/

var nummer = [];
while(nummer.length < 5){
    var i = Math.floor(Math.random() * 100) +1;
    if(nummer.indexOf(i) === -1) nummer.push(i);
}

nummer.sort(function(a, b) {
    return a - b;
});
  
for(let i=0;i<1;i++){
    console.log(nummer);
}

