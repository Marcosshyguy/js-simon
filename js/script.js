// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che fa visualizzare 5 numeri casuali
// a quetsa funzione attivo un timer di tot secondi appna appare sull dom in h1
//finito di visualizza nascondo i numeri con none
// finito il chiedo all'utente con prompt di inserire tramite un ciclo for uno ad uno i numeri che ha visto 
// insersco i numeri in un array cje dovrà confrontarsi con quello dei numeri casuali iniziale
// fare confronto dicendo quanti sono stati trovati e quali corrispondono
 
// html number displayer
let number = document.getElementById("number")

// displaybutton
let displayButton = document.getElementById("display")

// creo array per contenere array casuali
let casualNumber = []

// li genero e li leggo con ciclo displayCasualNumberor 
const cpuNumbers = displayCasualNumber(5);
console.log(cpuNumbers, casualNumber)

// stampo i numeri su html
number.innerHTML = cpuNumbers

// imposto il timer di visualizzazione
setTimeout (function(){
    number.classList.add("red")
}, 3000)







///////////////////////////////////////////////////////////////////////////////////////////////////////////7
// Function
// creo una funzione che mi produca numeri casuali

/**
 * five number generator that put them put in an array
 * @returns {Array} 
 */
function displayCasualNumber(numberQuantity){
    
    while (casualNumber.length < numberQuantity){
        const generatedNumber = parseInt(Math.floor(Math.random() * 100 + 1))
        if(!casualNumber.includes(generatedNumber)){
            casualNumber.push(generatedNumber)
        }
    }
    let arrayElement;
    for(let arrayIndex = 0; arrayIndex < casualNumber.length; arrayIndex++){
          arrayElement = casualNumber[arrayIndex];
        }

        return arrayElement
            
}


// function displayNone(htmlElement){
//     htmlElement.classList.add("d-none");
// }