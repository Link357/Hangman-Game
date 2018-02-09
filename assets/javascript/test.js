//words for hangman
var pokemon = [
['p', 'i', 'k', 'a', 'c', 'h', 'u' ],
['c', 'h', 'a', 'r', 'm', 'a', 'n', 'd', 'e', 'r'],
['s', 'q', 'u', 'i', 'r', 't', 'l', 'e'],
['b', 'u', 'l', 'b', 'a', 's', 'a', 'u', 'r'],
['s', 'n', 'o', 'r', 'l', 'a', 'x'],
['d', 'r', 'a', 'g', 'o', 'n', 'i', 't', 'e']
]
var lives = 6;
var wrong = [];
var game = " _"

currentWord = pokemon[Math.floor(Math.random() * pokemon.length)];
console.log(currentWord);

var answerArray = [];
    for (var i = 0; i < currentWord.length; i++) {
    answerArray[i] = "_";
    }
    console.log(answerArray);
    var remainingLetters = currentWord.length;

document.onkeyup = function(event) {
    var userInput = event.key; // gives a letter
    var userKey = event.keyCode; //gives a number
    if (userKey > 64 && userKey <91) {
        if (wrong.indexOf(event.key)==-1){
            if (currentWord.indexOf(event.key) === -1){
                lives --;
                wrong.push(event.key);
                console.log(wrong);
                if (lives==0){
                    document.write("Game Over!(refresh browser)");
                }
            }
        
        }
        if (currentWord.indexOf(event.key) > -1){

            for (var i = 0; i < answerArray.length; i++){
               
                
                if (currentWord[i]==event.key){
                    answerArray[i] = currentWord[i]
                }
            
            }
            
        //if (currentWord == answerArray){
          //  document.write("You Win");
            //console.log(answerArray);
        }
        }   
     }
}