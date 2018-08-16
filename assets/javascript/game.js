
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    $(document).ready(function() {

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var randomLetter = "";
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var wrongGuesses = [];
        var guessed = "";


        function startGame() {
            guessesLeft = 9;
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLetter)
            wrongGuesses = [];

            document.getElementById("guesses-left").innerHTML = guessesLeft;
            document.getElementById("guessed").innerHTML = wrongGuesses.join(" ");

        }


        function checkLetter() {

           if (guessed !== randomLetter) {
            guessesLeft--;
            document.getElementById("guesses-left").innerHTML = guessesLeft;
                
           }

           else {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            startGame();
           }
                       
        }


        function gameOver() {

        document.getElementById("guesses-left").innerHTML = guessesLeft;
        document.getElementById("wrong-guesses").innerHTML = guessed.join(" ");

        if (guessesLeft===0) {
            startGame()
        }

    }

    startGame();
    document.onkeyup = function(event) {
    guessed = String.fromCharCode(event.which).toLowerCase();
    checkLetter(guessed);

    } 


    
 
    
    
