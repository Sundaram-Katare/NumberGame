let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");


const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previous Guesses : ";
        guesses.classList.add("guesses");

    }

    guesses.textContent = `${guesses.textContent} ${userGuess} , `;

    if(userGuess === randomNumber){
        lastResult.textContent = "Congratulations ! You got it right";
        lastResult.style.backgroundColor = "#2ab452";
        lastResult.classList.add("lastResultActive");
        lowOrHi.textContent = "";
        var correct = new Audio("./correct-6033.mp3");
        correct.play();
        gameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = "!!! GAME OVER !!!";
        lastResult.classList.add("gameover");

        lowOrHi.textContent = "";
        const over = new Audio("./game-over-160612.mp3");
        over.play();

        gameOver();
    }
    else{
        lastResult.textContent = "Wrong";
        lastResult.style.backgroundColor = "red";
        lastResult.classList.add("lastResultActive");

        const wrong = new Audio("./error-4-199275.mp3");
        wrong.play();

        if(userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was too low ";
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was too high";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click" , checkGuess);

function gameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start New Game";
    document.body.append(resetButton);
    resetButton.addEventListener("click" , resetGame);
    resetButton.classList.add("reset");
}

function resetGame(){
    guessCount = 1;

    const resultParas = document.querySelectorAll(".resultParas p");
    for(const resultPara of resultParas){
        resultPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.classList.remove("lastResultActive");
    lastResult.classList.remove("gameover");

  randomNumber = Math.floor(Math.random() * 100) + 1;

}