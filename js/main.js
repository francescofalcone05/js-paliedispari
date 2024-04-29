/**************** FUNCTIONS *******************/ 

//creo una funzione per generare un numero random da 1 a 6
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//creo una funzione per sommare i due numeri dei giocatori
function sommaPlayers(num1, num2){

  let  risultato = num1 + num2;

  return risultato
  
}

//creo una funzione per controllare se la somma sia pari o dispari
function oddOrEven(numero){

    if (numero % 2 == 0){

        return 'pari'

    } else {

        return 'dispari'
    }

}

//creo una funzione per stabilire se la scelta e il risultato combaciano,
// cosi da stabilire il vincitore
function whoWin(valore1, valore2){

    if (valore1 == valore2){

        return 'Player'

    } else {

        return 'Computer'
    }

}



/**********************************************/ 

//inizializzo la variable con il button della pagina
let gameButton = document.getElementById ("gioca-btn");
let scelta = document.getElementById ("odd-even-select").value;



//al click fai cose
gameButton.addEventListener('click', function() {

    //usando la funzione, genero un numero random da 1 a 6
    let randomNum = parseInt(getRandomNumber(1,6));
    console.log(`il numero del computer e' ${randomNum} `);


    //memorizzo il numero dello user
    let userNum = parseInt(document.getElementById("ins-number").value);
    console.log(`il numero inserito e' ${userNum} `);

    //usando la funzione sommo i due numeri
    let somma = sommaPlayers(randomNum, userNum);
    console.log(somma);

    //usando la funzione controllo se la somma e` pari o dispari
    let pariOrDispari = oddOrEven(somma);
    console.log(`la somma e' ${pariOrDispari}`);

    //usando la funzione controllo se scelta e il risultato coincidono
    let vincitore = whoWin(pariOrDispari, scelta);
    console.log(vincitore)
    
    //svuoto l'input
    document.getElementById("ins-number").value = '';

    //stampo in pagina il vincitore
   // document.getElementById("winner") .innerHTML += `${vincitore}`;

});
