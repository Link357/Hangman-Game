
var pokemon = ["pikachu", "charmander", "squirtle", "bulbasaur", "snorlax", "dragonite" ];
var lives = 6;
messages = {
    win: "You win!",
    lose: "You lose!",
    repeatGuess: "You already guessed that!"

};
lettersGuessed = lettersMatched = '';


currentWord = pokemon[Math.floor(Math.random() * pokemon.length)];
console.log(currentWord);
