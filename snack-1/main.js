// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

// 1. Creo un array vuoto
const genericNumber = [];
let total = 0;
do {
    // 2. Chiedo all'utente un numero
    let askNumber = Number(prompt("Inserisci un numero tra 1 e 50"));
    // 3. Inserisco il numero dentro l'array
    genericNumber.push(askNumber);
    // 4. Sommo i numeri contenuti nell'array
    total += askNumber;
    // 5. FINTANTO CHE la somma dei numeri contenuti nell'array è minore di 50
    //    ALLORA continuo a chiedere un numero all'utente
} while (total <= 50);