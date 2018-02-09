//words for hangman
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];
var pikachu = ['p', 'i', 'k', 'a', 'c', 'h', 'u'] 
var charmander = ['c', 'h', 'a', 'r', 'm', 'a', 'n', 'd', 'e', 'r']
var squirtle = ['s', 'q', 'u', 'i', 'r', 't', 'l', 'e'] 
var bulbasaur = ['b', 'u', 'l', 'b', 'a', 's', 'a', 'u', 'r']
var snorlax = ['s', 'n', 'o', 'r', 'l', 'a', 'x'] 
var dragonite = ['d', 'r', 'a', 'g', 'o', 'n', 'i', 't', 'e']

var lives = 6;
var wrong = " ";
var game = " _"

document.onkeyup = function(event) {
    var userInput = event.key;

    //pikachu hangman
    if ((userInput === "p") || (userInput === "i") || (userInput === "k") ||
    (userInput === "a") || (userInput === "c") || (userInput === "h") || (userInput === "u")) { 

        if ((userInput === "p")){

        }
        if else((userInput === "i")){

        }

        if else((userInput === "k")){

        }

        if else ((userInput === "a")){

        }

        if else ((userInput === "c")){

        }
        
        if else ((userInput === "h")){

        }

        if else ((userInput === "u")){

        }

        else {
            lives--;
        }
    }

    //charmander hangman
    if ((userInput === "c") || (userInput === "h") || (userInput === "a") 
    || (userInput === "r") || (userInput === "m") || (userInput === "a") || (userInput === "n")) 
    || (userInput === "d")) || (userInput === "e")) || (userInput === "r")) { 

        if ((userInput === "c")){

        }
        if else((userInput === "h")){

        }

        if else((userInput === "a")){

        }

        if else ((userInput === "r")){

        }

        if else ((userInput === "m")){

        }
        
        if else ((userInput === "a")){

        }

        if else ((userInput === "n")){

        }
        
        if else ((userInput === "d")){

        }

        if else ((userInput === "e")){

        }

        if else ((userInput === "r")){

        }
        else {
            lives--;
        }
    }