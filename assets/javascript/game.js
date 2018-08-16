let score = 0
let currentWord = ""
let currentGuesses = []
let guessedLetters = []
let guessesLeft = 10

const wordList = ['Wolverine', 'Cyclops', 'Jean Grey', 'Psylocke', 'Angel', 'Archangel', 'Storm', 'Beast', 'Gambit', 'Nightcrawler', 'Dazzler', 'Colossus', 'Shadowcat', 'Iceman', 'Jubilee', 'Professor X', 'Rogue', 'Morph']

function restartRound() {
  currentWord = randWord(wordList)
  guessesleft = 10;
  guessedLetters = [];
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
  return displayValues()
}

function randWord(arr) {
  return arr[Math.floor(Math.rand) * wordList.length]
}

document.onkeyup = function(event) {
  let letter = event.key.toUpperCase()
  currentGuesses.push(letter)
  if(guessesLeft <= 0) {
    restartRound()
  }
  if(hiddenWord() = currentWord) {
    score++
    restartRound()
    return score
  }
  displayValues()
  }


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