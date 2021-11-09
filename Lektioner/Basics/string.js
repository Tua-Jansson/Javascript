//Använd hällre "let" än "var", let är för en
let teacher = "Leif"; 
let klass = "javascript";

//String methods
console.log(teacher);
console.log(teacher.length); //Antal bokstäver av teacher
console.log(teacher.toUpperCase());

//String formating
console.log("Min lärare i " + klass + " är " + teacher + ".");
console.log(`Min lärare i ${klass} är ${teacher}.`);