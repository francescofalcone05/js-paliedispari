/**************** FUNCTIONS *******************/ 

//creo una funzione per generare un numero random da 1 a 6
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//creo una funzione per sommare i due numeri dei giocatori
function sommaPlayers(num1, num2){

  let  risultato = num1 + num2

  return risultato
  
}



/**********************************************/ 

//inizializzo la variable con il button della pagina
let gameButton = document.getElementById("gioca-btn")


//al click fai cose
gameButton.addEventListener('click', function() {






//usando la funzione, genero un numero random da 1 a 6
let randomNum = getRandomNumber(1,6)
console.log(`il numero del computer e' ${randomNum} `)


//memorizzo il numero dello user
let userNum = parseInt(document.getElementById("ins-number").value)
console.log(`il numero inserito e' ${userNum} `)

//usando la funzione sommo i due numeri(la funzione non funziona)
let somma = sommaPlayers(randomNum + userNum)
console.log(somma)









//svuoto l'input
document.getElementById("ins-number").value = ''





})
