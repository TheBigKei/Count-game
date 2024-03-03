const counter = createCounter;

document.getElementById("formInput").addEventListener("submit", function(event) {
    event.preventDefault();

    var guesses = document.querySelector('#guesses')
    var lastResult = document.querySelector('')

    var inputNumber = document.getElementById("nInput").value;
    var rndNumber = Math.floor(Math.random() * 101);
    var answerStatus = ['Congratulations! You got it right!','Last guess was too high!','Last guess was too low!']

    switch(inputNumber){
        case inputNumber === rndNumber:
            print(answerStatus[0])
            break;

        case inputNumber > rndNumber:
            print(answerStatus[1])
            break;

        case inputNumber < rndNumber:
            print(answerStatus[2])
            break;
    }

});
// 'Congratulations! You got it right!'
function print (answerStatus){

    p = document.querySelectorAll('[data-clear="true"]');          

    let conditionsObj = {
        'Last guess was too high!': false,
        'Last guess was too low!':false
    }

    if (conditionsObj[answerStatus]===false){
        document.getElementById("answerStatus").innerText = 'Wrong!'
    }
    else{
        document.getElementById("answerStatus").innerText = answerStatus
        p.forEach(p => {
                p.innerHTML = '';
            });
    }

    

}

function createCounter(){
    let guessCount = 0;
    function counter(result){
        guessCount++;
        if(guessCount!==10){
            return guessCount;
        }
        else{
            endGame(false);
        }
    }
    return counter;
}

function endGame(){
    let count = 0;
    

}