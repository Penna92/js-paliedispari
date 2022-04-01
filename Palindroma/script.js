// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola = prompt("Inserisci parola");

function palindroma(parola) {
    let letters = parola.split("");
    // console.log(letters);
    let parolagirata = "";
    for(let i = letters.length - 1; i>=0; i--){
        parolagirata += letters[i];
    }    
    if(parolagirata==parola){
        return "è palindroma";
    } else {
        return "non è palindroma";
    }
}

let parolaPalindroma = palindroma(parola);
// console.log(parolaPalindroma);
document.getElementById("app").innerHTML += ("<p>La parola che hai scritto (" + parola + ") "  + parolaPalindroma + "</p>");
