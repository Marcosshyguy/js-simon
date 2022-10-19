// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che fa visualizzare 5 numeri casuali
// a quetsa funzione attivo un timer di tot secondi appna appare sull dom in h1
7//finito di visualizza nascondo i numeri con none
// finito il chiedo all'utente con prompt di inserire tramite un ciclo for uno ad uno i numeri che ha visto 
// insersco i numeri in un array cje dovrà confrontarsi con quello dei numeri casuali iniziale
// fare confronto dicendo quanti sono stati trovati e quali corrispondono
 

// creo array per contenere array casuali
alert("lmcsdkjc")

 const ger = displayCasualNumber(5)

 console.log(ger)





///////////////////////////////////////////////////////////////////////////////////////////////////////////7
// Function
// creo una funzione che mi produca numeri casuali

/**
 * five number generator put in an array
 * @returns {Array} 
 */
function displayCasualNumber(numberQuantity){
    const casualNumber = []
    while (casualNumber.length < numberQuantity){
        const generatedNumber = parseInt(Math.floor(Math.random() * 100 + 1))
        if(!casualNumber.includes(generatedNumber)){
            casualNumber.push(generatedNumber)
        }
    }
    return casualNumber
}




// const bombs = [];
//     while (bombs.length < 16) {
//     const randomNumber = Math.floor(Math.random() * numberGenerated + 1);
//     if (!bombs.includes(randomNumber)) {
//       bombs.push(randomNumber);
//     }
//   }
//     return bombs;
// }