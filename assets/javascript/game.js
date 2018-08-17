let score = 0
let currentWord = ""
let currentGuesses = ['']
let wrongLetters = ['']
let guessesLeft = 10

const wordList = ['WOLVERINE', 'CYCLOPS', 'JEAN GREY', 'PSYLOCKE', 'ANGEL', 'ARCHANGEL', 'STORM', 'BEAST', 'GAMBIT', 'NIGHTCRAWLER', 'DAZZLER', 'COLOSSUS', 'SHADOWCAT', 'ICEMAN', 'JUBILEE', 'PROFESSOR X', 'ROGUE', 'MORPH']

function restartRound() {
  currentWord = randWord()
  guessesLeft = 10;
  wrongLetters = [];
}

function displayValues() {
  let scoreTotal = document.querySelector("#score")
  let currentWord = document.querySelector("#currentWord")
  let wrongLetters = document.querySelector("#wrongLetters")
  let guessesLeft = document.querySelector("#guessesLeft")

   scoreTotal.innerHTML = 0
   currentWord.innerHTML = hiddenWord()
   wrongLetters.innerHTML = wrongLetters
   guessesLeft.innerHTML = guessesLeft
}

document.querySelector("#score").innerHTML = displayValues()
document.querySelector("#currentWord").innerHTML = displayValues()
document.querySelector("#wrongLetters").innerHTML = displayValues()
document.querySelector("#guessesLeft").innerHTML = displayValues()


function randWord() {
  let arr = [Math.floor(Math.random() * wordList.length)]
  return arr
}

document.addEventListener("keypress", function(event) {
  let letter = event.key.toUpperCase();
  currentGuesses.push(letter);
    if(guessesLeft <= 0) {
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
    console.log(letter)
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
