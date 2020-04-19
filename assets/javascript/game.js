//Hide all HTML Elements, Unhide board (extract to mutltiple functions, one for hide, one for unhide, one for game start)//
const boardClass = document.querySelector(".board");
const boardId = document.querySelector("#board");
const keyPress = document.getElementById("key-press");
const score = document.getElementById("score");
const remainGuess = document.getElementById("score");
const span = document.getElementById("span");
var guessEl = document.getElementById("guess");

let leftGuess = 5

//Functions for start of the game: beginHide() hides <h1 id="key-press"> and displayBoard() sets <p class="board"> to visible//
function beginHide() {
    addEventListener("click", function () {
        if (keyPress.style.visibility === "visible") {
            keyPress.style.visibility = "hidden";
        } else {
            keyPress.style.visibility = "hidden";
        }
    })
}
function displayBoard() {
    addEventListener("click", function () {
        if (boardClass.style.visibility === "hidden") {
            boardClass.style.visibility = "visible";
            boardId.style.visibility = "visible";
        } else {
            boardClass.style.visibility = "visible";
        }
    })
}

//Functions executed//
beginHide();
displayBoard();

//Array containing all words//
const words = ["cortana", "pelican", "gravemind", "monitor", "covenant"]

// Variables declared for each index//, //Split chars in word into an array//, //Displaying blanks to word //
let index = 0
let wordIndex = words[index]
let chars = wordIndex.split("");
let blank = [];
let placeholder = " "
let undscrString = "_"

// Creates an array to access and display a "_" + " " for each character in word//
for (var i = 0; i < chars.length; i++) {
    if (i < chars.length) {
        var spanEl = document.createElement("span");
        spanEl.textContent = placeholder + undscrString;
        boardClass.append(spanEl);
        blank.push(undscrString);
    } else {
        break;
    }
}

function forLoop() {
    /* The following code was intended to utilize a for loop to cycle through each value in the array for words = []
    
    //For loop: initialize i; continue for everytime i is less than the length of words = [] (); add 1 to i//
    for (var i = 0; i < words.length; i++) {
    //if index is less than words.length, then run the following code block   //     
        if () {
            primary();
            //Add 1 to index then loop to beginning//
            index++;
        } else {
            break;
        }}
    */
}

//Declare DOM variable for primary() //
var spanNodes = document.body.firstElementChild.childNodes[3].childNodes;

function loopPlusTwo() {
    for (var i = 0; i < chars.length; i++) {
        spanNodes = spanNodes[i + 2];
        return spanNodes;
    }
}

//Declares function for else/if statements//
function elseIfFunc(letter, iii) {
    (alpha === letter)
    spanNodes[iii + 2].textContent = letter;
}

function letter(wordChar) {
    alpha === wordchar;
    spanInit.textContent = wordChar;
}

//Primary Function called in the for loop on line 63//
function primary() {

    //Else/If Code block for each value in words array//
    if (index === 0) {

        //Add event listener to document to read user keydown input, convert to a lower case character, and output the resulting character into a corresponding  //
        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();
            var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
            var alpha = alphaNum.includes(key);
            if (alpha !== chars) {
                leftGuess = leftGuess--;
            } else if (alpha === "c") {
                elseIfFunc("c", 0);
            } else if (alpha === "o") {
                elseIfFunc("o", 1);
            } else if (alpha === "r") {
                elseIfFunc("r", 2);
            } else if (alpha === "t") {
                elseIfFunc("t", 3);
            } else if (alpha === "a") {
                elseIfFunc("a", 4);
            } else if (alpha === "n") {
                elseIfFunc("n", 5);
            } else if (alpha === "a") {
                elseIfFunc("a", 6);
            }
        });
    } else if (index === 1) {
        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();
            var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
            var alpha = alphaNum.includes(key);
            if (alpha !== chars) {
                leftGuess = leftGuess--;
            } else if (alpha === "p") {
                elseIfFunc("p", 0);
            } else if (alpha === "e") {
                elseIfFunc("e", 1);
            } else if (alpha === "l") {
                elseIfFunc("l", 2);
            } else if (alpha === "i") {
                elseIfFunc("i", 3);
            } else if (alpha === "c") {
                elseIfFunc("c", 4);
            } else if (alpha === "a") {
                elseIfFunc("a", 5);
            } else if (alpha === "n") {
                elseIfFunc("n", 6);
            }
        });
    } else if (index === 2) {
        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();
            var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
            var alpha = alphaNum.includes(key);
            if (alpha !== chars) {
                leftGuess = leftGuess--;
            } else if (alpha === "g") {
                elseIfFunc("g", 0);
            } else if (alpha === "r") {
                elseIfFunc("r", 1);
            } else if (alpha === "a") {
                elseIfFunc("a", 2);
            } else if (alpha === "v") {
                elseIfFunc("v", 3);
            } else if (alpha === "e") {
                elseIfFunc("e", 4);
            } else if (alpha === "m") {
                elseIfFunc("m", 5);
            } else if (alpha === "i") {
                elseIfFunc("i", 6);
            } else if (alpha === "n") {
                elseIfFunc("n", 7);
            } else if (alpha === "d") {
                elseIfFunc("d", 8);
            }
        });
    } else if (index === 3) {
        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();
            var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
            var alpha = alphaNum.includes(key);
            if (alpha !== chars) {
                leftGuess = leftGuess--;
            } else if (alpha === "m") {
                elseIfFunc("m", 0);
            } else if (alpha === "o") {
                elseIfFunc("o", 1);
            } else if (alpha === "n") {
                elseIfFunc("n", 2);
            } else if (alpha === "i") {
                elseIfFunc("i", 3);
            } else if (alpha === "t") {
                elseIfFunc("t", 4);
            } else if (alpha === "o") {
                elseIfFunc("o", 5);
            } else if (alpha === "r") {
                elseIfFunc("r", 6);
            }
        });
    } else if (index === 4) {
        document.addEventListener("keydown", function (event) {
            var key = event.key.toLowerCase();
            var alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
            var alpha = alphaNum.includes(key);
            if (alpha !== chars) {
                leftGuess = leftGuess--;
            } else if (alpha === "c") {
                elseIfFunc("c", 0);
            } else if (alpha === "o") {
                elseIfFunc("o", 1);
            } else if (alpha === "v") {
                elseIfFunc("v", 2);
            } else if (alpha === "e") {
                elseIfFunc("e", 3);
            } else if (alpha === "n") {
                elseIfFunc("n", 4);
            } else if (alpha === "a") {
                elseIfFunc("a", 5);
            } else if (alpha === "n") {
                elseIfFunc("n", 6);
            } else if (alpha === "t") {
                elseIfFunc("t", 7);
            }
        });
    };

}