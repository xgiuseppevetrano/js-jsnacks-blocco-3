// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

// 1. Creo due tag div
const divOne = document.createElement("div");
const divTwo = document.createElement("div");

const container = document.querySelector(".container");
container.append(divOne, divTwo);

// 2. Assegno ad ogni div un id diverso
//    Ogni id corrisponde ad un colore del testo (rosso - verde)
divOne.id = "red";
divTwo.id = "green";

// 3. Creo un array con una quantità casuale di numeri tra 10 e 30
let number = [];
for (let i = 0; i < Math.floor(Math.random() * 30) + 10; i++) {
    // 4. All'interno dell'array metto dei numeri casuali tra 1 e 100
    number.push(Math.floor(Math.random() * 100) + 1);

    if (number[i] % 2 === 1) {
        // 5. Stampo nel div con id rosso i numeri dispari
        divOne.innerText += ` ${number[i]}`;
    } else {
        // 6. Stampo nel div con id verde i numeri pari
        divTwo.innerText += ` ${number[i]}`;
    }
}