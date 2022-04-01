// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// CHIEDERE ALL'UTENTE DI SCEGLIERE TRA PARI O DISPARI

// SE L'UTENTE SCEGLIE DISPARI :
document
  .getElementById("btn1")
  .addEventListener("click", myFunction);

function myFunction() {
  // CHIEDERE UN NUMERO DA 1 A 5 ALL'UTENTE
  let userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
  // console.log(userNumber);
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert(
      "Non hai inserito un numero compreso tra 1 e 5: riaggiorna e riprova."
    );
  }

  // FUNZIONE NUMERO RANDOM PC
  function randomNumber(min, max) {
    let randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomnumber;
  }
  let numeroPC = randomNumber(1, 5);

  // FUNZIONE PER STABILIRE SE LA SOMMA DEI 2 NUMERI E' PARI O DISPARI
  function checkPari(userNumber, numeroPC) {
    let somma = userNumber + numeroPC;
    if (somma % 2 === 0) {
      return "La somma dei due numeri (" + somma + ") è pari: HAI PERSO!";
    } else {
      return "La somma dei due numeri (" + somma + ") è dispari: HAI VINTO!";
    }
  }
  let checkPariDispari = checkPari(userNumber, numeroPC);

  // CONDIZIONI PER LA STAMPA SU SCHERMO
  if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
    document.writeln("<p>Hai inserito il numero: " + userNumber + "</p>");
    document.writeln("<p>Il pc ha inserito il numero: " + numeroPC + "</p>");
    document.writeln(checkPariDispari);
  } else {
    document.writeln("Non hai inserito un numero valido");
    document.writeln("<p>Il pc ha inserito il numero: " + numeroPC + "</p>");
    document.writeln("<p>Non è stato possibile effettuare la somma</p>");
  }
}

//SE SCEGLIE PARI :
document
  .getElementById("btn2")
  .addEventListener("click", myFunction2);

function myFunction2() {
  // CHIEDERE UN NUMERO DA 1 A 5 ALL'UTENTE
  let userNumber = parseInt(prompt("Inserisci un numero compreso tra 1 e 5"));
  // console.log(userNumber);
  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert(
      "Non hai inserito un numero compreso tra 1 e 5: riaggiorna e riprova."
    );
  }

  // FUNZIONE NUMERO RANDOM PC
  function randomNumber(min, max) {
    let randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomnumber;
  }
  let numeroPC = randomNumber(1, 5);

  // FUNZIONE PER STABILIRE SE LA SOMMA DEI 2 NUMERI E' PARI O DISPARI
  function checkPari(userNumber, numeroPC) {
    let somma = userNumber + numeroPC;
    if (somma % 2 === 0) {
      return "La somma dei due numeri (" + somma + ") è pari: HAI VINTO!";
    } else {
      return "La somma dei due numeri (" + somma + ") è dispari: HAI PERSO!";
    }
  }
  let checkPariDispari = checkPari(userNumber, numeroPC);

  // CONDIZIONI PER LA STAMPA SU SCHERMO
  if (!isNaN(userNumber) && userNumber >= 1 && userNumber <= 5) {
    document.writeln("<p>Hai inserito il numero: " + userNumber + "</p>");
    document.writeln("<p>Il pc ha inserito il numero: " + numeroPC + "</p>");
    document.writeln(checkPariDispari);
  } else {
    document.writeln("Non hai inserito un numero valido");
    document.writeln("<p>Il pc ha inserito il numero: " + numeroPC + "</p>");
    document.writeln("<p>Non è stato possibile effettuare la somma</p>");
  }
}
