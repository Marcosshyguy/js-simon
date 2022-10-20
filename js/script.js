// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri spariscono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creo una funzione che fa visualizzare 5 numeri casuali
// a quetsa funzione attivo un timer di tot secondi appna appare sull dom in h1
//finito di visualizza nascondo i numeri con none
// finito il chiedo all'utente con prompt di inserire tramite un ciclo for uno ad uno i numeri che ha visto 
// insersco i numeri in un array cje dovrà confrontarsi con quello dei numeri casuali iniziale
// fare confronto dicendo quanti sono stati trovati e quali corrispondono
 
// html number displayer div
let number = document.getElementById("number")
let result =document.getElementById("result")

// displaybutton
let displayButton = document.getElementById("display")

// creo array per contenere array casuali
let casualNumber = []
// creo array per contenere risposte utente
let userAnswers = []

// li genero e li leggo con ciclo displayCasualNumberor 
const cpuNumbers = displayCasualNumber(casualNumber, 5);
console.log(cpuNumbers)

// stampo i numeri su html
number.innerHTML = cpuNumbers

// imposto il timer di visualizzazione
setTimeout (function(){
    hideNumber (number)
    // altro metodo =number.innerHTML=""
}, 3000)

// chiedo all'utente di inserire i numeri che si ricorda

setTimeout (function(){
    userAnswers = askForNumber (userAnswers);               //<-----------------prossima volta gli array vuoti meglio se me li creo dentro la funzione 
    //perche larray lo rimepiva ma lo restituiva vuoto perche la funzione compare era fuori dal range di quetsa funzione
    console.log(userAnswers);
    // aggiungo una funzione che confronti i 2 array che abbiamo prodotto
    
    const comparedResultArray = compareArrayElements(userAnswers,casualNumber);
    console.log(comparedResultArray)
    result.innerHTML += `Hai trovato ${comparedResultArray.length} su 5: ${comparedResultArray}`
}, 3500)







///////////////////////////////////////////////////////////////////////////////////////////////////////////7
// Function
// creo una funzione che mi produca numeri casuali

/**
 * five number generator that put them put in an array
 * @param  {Number} numberQuantity number of raay element to generate
 * @param {Array} emptyArray empty array
 * @returns {Array} 
 */
function displayCasualNumber(emptyArray, numberQuantity){
    
    while (emptyArray.length < numberQuantity){
        const generatedNumber = parseInt(Math.floor(Math.random() * 100 + 1))
        if(!emptyArray.includes(generatedNumber)){
            emptyArray.push(generatedNumber)
        }
    }
        return emptyArray
}


/**
 * collector of user answer
 * @param {Array} emptyArraysec empty array to fill with user answer
 * @returns {array}
 */
function askForNumber(emptyArraysec) {
    while(emptyArraysec.length < 5){
        let answer = parseInt(prompt("dimmi quali numeri hai visto uno alla volta"))
        emptyArraysec.push(answer);
        }  
        return emptyArraysec
    }
    
/**
 * Description
 * @param {Array} cpuArray
 * @param {Array} userArray
 * @returns {Array}
 */
function compareArrayElements(userArray, cpuArray){
    const comparedArray = []
    for(let i = 0; i < userArray.length; i++){
        let thisElement = userArray[i]                       //<----------------way to compare 2 arrays's element
        if(cpuArray.includes(thisElement)){
            comparedArray.push(thisElement)
        }
    }
    return comparedArray
}


// funcyion printresult (arrayfinale){
    // prendo con getid.innerHTML e stampo i numeriin dom eaggiungo anche quanti ne ho trovati mettendo lenghtdell'array+1
// }

// ui function

/**
 * hide elemnet on html
 * @param {number} ThingsToHide
 * @returns {object class change}
 */
function hideNumber(thingsToHide){
    thingsToHide.classList.add("d-none")
}