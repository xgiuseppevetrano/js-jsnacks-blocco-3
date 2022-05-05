// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

// 1. Chiedo all'utente un numero che chiamerò N
const N = Number(prompt("Inserisci un numero"));

// 2. Creo tanti array quanto è N
for (let i = 0; i < N; i++) {
    const number = [];
    // 3. Ogni array è formato da 10 numeri casuali tra 1 e 100
    // Ogni array formato da 10 elementi
    for (let y = 0; y < 10; y++) {
        // Ogni elemento è un numero casuale tra 1 e 100
        number.push(Math.floor(Math.random() * 100) + 1);
    }
    // 3. Ogni array creato viene stampato in console
    console.log(number);
}
