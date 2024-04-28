var counter = createCounter(); 

var storedRndNumber = generateRndNumber();



var answerStatus = ['Congratulations! You got it right!','Last guess was too high!','Last guess was too low!'];

function generateRndNumber(){

    var rndNumber = Math.floor(Math.random() * 101);

    function storedRndNumber(){
        return rndNumber
    }

    return storedRndNumber
}

var submitBtn = document.getElementById('btnSubmit'); 

document.getElementById("formInput").addEventListener("submit", function(event) { 
    event.preventDefault(); 
 
    var inputNumber = document.getElementById("nInput").value; 
    if (inputNumber===''){ 
        inputNumber = 0; 
    }
    console.log(storedRndNumber())
    inputNumber=Number(inputNumber);

    if(inputNumber>storedRndNumber()){ 
        print(inputNumber,answerStatus[1]); 
    } 
    else if(inputNumber<storedRndNumber()){ 
        print(inputNumber,answerStatus[2]); 
    } 
    else if(inputNumber===storedRndNumber()){ 
        print(inputNumber,answerStatus[0]);
    } 
    else { 
        throw console.error(); 
    } 
 
}); 
 
function print (inputNumber,answerStatus){ 
    let conditionsObj = { 
        'Last guess was too high!': false, 
        'Last guess was too low!': false,
        'Congratulations! You got it right!': true
    } 
 
    document.getElementById("previousGuesses").innerText += inputNumber + 'ㅤ'; 
 
    if (conditionsObj[answerStatus]===false){ 
        document.getElementById("answerStatus").innerText = '\n' + answerStatus; 
        document.getElementById("guesses").innerText = 'Total guesses: ' + counter(); 
    } 
    else{ 
        document.getElementById("answerStatus").innerText = '\n' + answerStatus;
        document.getElementById("guesses").innerText = 'Total guesses: ' + counter(true); 
    } 
 
} 
 
function createCounter(){ 
    var guessCount = 0; 
 
    function counter(result){ 
        guessCount++;
        
        if(guessCount>=10){ 
            endGame(false) 
        }
        else if(result===true){
            return endGame(true), guessCount;
        }
 
        return guessCount; 
    } 
 
    return counter; 
} 
 
function endGame(result){ 

    var resetGameBtn = document.createElement('button'); 
    resetGameBtn.textContent = 'Reset Game'; 

    var resetContainer = document.getElementById('resetBtn');
    resetContainer.appendChild(resetGameBtn);

    resetGameBtn.addEventListener('click', resetGame);
    resetGameBtn.addEventListener('click', resetGameBtn.remove);

    resetGameBtn.addEventListener('click', dataReset);

    submitBtn.disabled = true; 

    if(result === false){ 
        printGameOver = document.getElementById('answerStatus').textContent += '\n You lose. Game over'
    }
    else{
        printGameOver = document.getElementById('answerStatus').textContent += '\n You win. Game over'
    }
}

function dataReset(){
    let dataClear = document.querySelectorAll('[data-clear="true"]');
    dataClear.forEach(dataClear => {
        dataClear.innerHTML='';
    });
}
 
function resetGame(){ 
    counter = createCounter(); 
    submitBtn.disabled = false;
    storedRndNumber = generateRndNumber();
}