// FUNCTION
// Genera numeri casuali
function randomNumber (min, max){
    var number = Math.floor(Math.random() * (max - min + 1) ) + min;
    return number;
}

// Trova il duplicato
function trovaDuplicato (numeroCasuale, array) {
    for (var i = 0; i < array.length; i++) {
        if (numeroCasuale == array[i]) {
            return true;
        }
    }
    return false;
}

// VARIABILI
var numeriCasuali = [];
var inserimentiUtente = [];
var punteggio = 0;

// GIOCO
// Genero un numero casuale da 1 a 100
for (i = 0; i < 5; i++) {
    numeriCasuali.push(randomNumber (1, 100));
}

// Un alert() espone 5 numeri generati casualmente.
alert(numeriCasuali.join(" "));

// Parte un timer di 30 secondi.
// Dopo 30 secondi l'utente inserisce, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
setTimeout(function(){
    for (i = 0; i < 5; i++) {
        var numeriUtente = prompt("Ripeti i numeri di poco fa!");
        if (trovaDuplicato(numeriUtente, numeriCasuali)) {
        inserimentiUtente.push(numeriUtente);
        punteggio++;
        }
    }
    alert("Hai ricordato " + punteggio + " dei 5 numeri! " + "\nEcco i numeri che hai indovinato " + inserimentiUtente.join(" "));
}, 30000);



