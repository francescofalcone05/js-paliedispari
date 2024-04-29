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

/****************************/
//creo una funzione per controllare che:
// una parola revers sia uguale a quella precedentemente data
function isTheSame(word1, word2){

    if (word1 == word2){

        return 'la parola inserita e` palidroma'

    } else {

        return 'la parola inserita non e` palidroma'
    }

}


/**********************************************/ 



/************** PALIDROMA ****************/

//inizializzo dati al momento con valore vuoto
let userWord =''
let reverseWord = ''


//con il while non riesco
//while (userWord != reverseWord) {

    //chiedo di inserire la parola
    userWord = prompt('Inserisci la tua parola');
    console.log(userWord, userWord.length)
    
    //inverti gli indici della parola tramite ciclo, basandosi sulla length
    for(i=0; i < userWord.length; i++){
    
       //inverti le lettere ad ogni giro
       reverseWord = userWord.charAt(i) + reverseWord;
       console.log(reverseWord)
    
    }
    
    //tramite funzione stabiliamo se la parola inversa e`si puo` leggere come quella originale
    let yesOrNo = isTheSame(userWord, reverseWord);
    console.log(yesOrNo)
    alert(yesOrNo)

//}


/************** GIOCO DEI DADI ****************/

//inizializzo la variable con il button della pagina
let gameButton = document.getElementById ("gioca-btn");



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

    //inizializzo la scelta fatta dallo user
    let scelta = document.getElementById ("odd-even-select").value;


    //usando la funzione controllo se scelta e il risultato coincidono
    let vincitore = whoWin(pariOrDispari, scelta);
    console.log(vincitore)
    
    //svuoto l'input
    document.getElementById("ins-number").value = '';

    //stampo in pagina il vincitore
    document.getElementById("winner") .innerHTML = `${vincitore}`;

});


