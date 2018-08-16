let score = 0
let currentWord = ""
let currentGuesses = []
let wrongLetters = []
let guessesLeft = 10

const wordList = ['WOLVERINE', 'CYCLOPS', 'JEAN GREY', 'PSYLOCKE', 'ANGEL', 'ARCHANGEL', 'STORM', 'BEAST', 'GAMBIT', 'NIGHTCRAWLER', 'DAZZLER', 'COLOSSUS', 'SHADOWCAT', 'ICEMAN', 'JUBILEE', 'PROFESSOR X', 'ROGUE', 'MORPH']

function restartRound() {
  currentWord = randWord(wordList)
  guessesLeft = 10;
  wrongLetters = [];
}

function displayValues() {
  let scoreTotal = document.querySelector("#score")
  let hiddenWord = document.querySelector("#hiddenWord")
  let wrongLetters = document.querySelector("#wrongLetters")
  let guessesLeft = document.querySelector("#guessesLeft")

  scoreTotal.innerHTML = 0
  hiddenWord.innerHTML = hiddenWord()
  wrongLetters.innerHTML = wrongLetters.join()
  guessesLeft.innerHTML = guessesLeft
}


function randWord(arr) {
  return arr[Math.floor(Math.rand) * wordList.length]
}

document.addEventListener("keypress", function(event) {
  let letter = event.key.toUpperCase();
  currentGuesses.push(letter);
    if(guessesLeft <= 0)
  {
  restartRound();
    } 
    if(hiddenWord() === currentWord) {
      score++
      restartRound()
      return
    } 
    if(currentWord.indexOf(letter) !== -1) {
    } else {
      guessesLeft --
      wrongLetters.push(letter)
    }
    displayValues()
    })

function hiddenWord() {
  let tempWord = []
  for(let i = 0; i < currentWord; i++) {
    if(currentGuesses.indexOf(currentWord[i]) !== -1) {
    tempWord.push(currentWord[i])
    } else {
      tempWord.push("_ ")
    }
  }
  
}

restartRound();