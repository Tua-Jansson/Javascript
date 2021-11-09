/* 1. Skriv ett uttryck för varje av följande matematiska 
operatorer, +, -, *, /, **, %. Skriv ut uttrycken i konsolen, 
varje uttryck ska få värdet 8*/

console.log(5+3) //8
console.log(10-2) //8
console.log(4*2) //8
console.log(16/2) //8
console.log(2**2+2**2) //8
console.log(18%10) //8



/* 2. Deklarera två variabler: en sträng och en variabel 
som är längden på den deklarerade stängen. Längden ska 
definieras med hjälp av en sträng metod. Skriv ut en mening 
i konsolen där det står ordet och hur lång den är.*/

let Smurf="Gammel Smurf";

console.log(Smurf);
console.log(Smurf.length);

console.log("Gargamel tillfångatog " + Smurf +  " tidigare idag");
console.log(("Gargamel tillfångatog " + Smurf + " tidigare idag").length);



/* 3. Deklarera en variabel och ge den ett Sträng värde av 
en säsong. Skriv en IF-sats som skriver ut ”Potatis” om 
strängen är höst och ”Ingen Potatis” om stängen är något 
annat.*/


let namn="Höst";

if(namn="Höst"){
    console.log("Potatis c:");
}else{
    console.log("Ingen potatis :c");
}


/* 4. Deklarera en variabel ”frukt” och ge den ett Number 
värde. Skriv ut ”Det finns frukt kvar” om värdet är 
positivt eller ”Ingen frukt kvar” om värdet är negativt.*/



/* 5. Deklarera objektet ”Aland” med 4 egenskaper. 
Skriv ut en av egenskaperna i konsolen/*



/* 6. Deklarera en Array ”varldshav” med namnen på 3 hav.

a. Använd push() för att lägga till ett till havsnamn.*/

let hav=["Östersjön", "Medelhavet"];
hav.push("Ålandshav");
console.log(hav);

/* b. Använd shift() och pop() för att ta ut första och 
sista havsnamnen i var sin variabel och skriv ut de i 
konsolen. Kommentera koden med vad som händer på varje rad.*/



/*c. Använd splice() för att lägga till ett havsnamn som element [1]. Skriv ut det elementet sedan.*/