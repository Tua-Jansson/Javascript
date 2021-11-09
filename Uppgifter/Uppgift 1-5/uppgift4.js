
function randInt(min,max){
    let slumpTal = Math.floor(Math.random()*(max-min))+min;
    return slumpTal;
}

do{ 
    let tal1=Number(prompt("Ange lägsta talet. "));
    let tal2=Number(prompt("Ange lägsta talet. "));
    alert(randInt(tal1,tal2)+" är ett tal mellan " + tal1 + " och "+tal2);
}while(confirm("Vill du slumpa fram ett nytt tal?"));