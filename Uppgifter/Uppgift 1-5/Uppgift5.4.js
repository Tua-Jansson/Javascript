/*Skriv ett program som slumpar fram 1000 registreringsskyltar. 
En registreringsskylt ska bestå av tre bokstäver och tre siffror. 
Endast bokstäver tillåtna enligt finska registreringsskyltar. 
Programmet ska kontrollera att en skylt inte slumpas fram två gånger. 
Skyltarna skall skrivas ut i konsolen med ett mellanslag mellan varje 
skylt och inte en på varje rad. Minst en array skall användas 
i uppgiften.*/

/*Att göra 
använd for loop, if
- Array med bokstäver
- Slumpa en bokstav * 3
- Slumpa en siffra *3
- Kolla att den inte redan finns
- Skapa en for loop * 1000*/

let bokstav = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P","Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let skyltar = [];
let skylt ="";

for(var i=0; i<1000; i++){ //Skriver ut 1000 skyltar

    for (let j=0; j<3; j++){ //skriver 3 bokstäver från arrayn "bokstav" ex. AOE
        skylt=skylt+bokstav[Math.floor(Math.random()*bokstav.length)];
    
    }for (let j=0; j<3; j++){//skriver 3 sifforo ex. 186
        skylt=skylt+Math.floor(Math.random()*10);
    }

if (skyltar.includes(skylt)){//kollar om det redan finns en sådan skylt
    i--;//om skylten finns så görs skylten om
}else{
    skyltar.push(skylt);//om den inte finns läggs skylten in i skyltar
}

skylt="";
}

console.log(skyltar.join(" ")); //Innehållet i arrayn Skyltar + ett mellanslag 