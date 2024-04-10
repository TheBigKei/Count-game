const counter = createCounter();

var rndNumber = Math.floor(Math.random() * 101);

document.getElementById("formInput").addEventListener("submit", function(event) {
    event.preventDefault();

    var inputNumber = document.getElementById("nInput").value;
    if (inputNumber===''){
        inputNumber = 0;
    }

    var answerStatus = ['Congratulations! You got it right!','Last guess was too high!','Last guess was too low!']

    if(inputNumber>rndNumber){
        print(inputNumber,answerStatus[1]);
    }
    else if(inputNumber<rndNumber){
        print(inputNumber,answerStatus[2]);
    }
    else if(inputNumber===rndNumber){
        print(inputNumber,answerStatus[0]);
    }
    else {
        throw console.error();
    }

});

function print (inputNumber,answerStatus){
    let conditionsObj = {
        'Last guess was too high!': false,
        'Last guess was too low!': false
    }

    document.getElementById("previousGuesses").innerText += inputNumber + 'ㅤ';

    if (conditionsObj[answerStatus]===false){
        document.getElementById("answerStatus").innerText = '\n' + answerStatus;
        document.getElementById("guesses").innerText = 'Total guesses: ' + counter();
    }
    else{
        document.getElementById("answerStatus").innerText = '\n' + answerStatus;
        endGame(true);
    }

}

function createCounter(){
    var guessCount = 0;

    function counter(){

        guessCount++;

        if(guessCount>=10){
            endGame(false)
        }
        return guessCount;
    }

    return counter;
}

function endGame(result){
    if(result === false){
        resetGame()
    }

}

function resetGame(){
    guessCount = 0;
    console.log(guessCount)
}