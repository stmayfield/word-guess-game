//Hide all HTML Elements, Unhide board (extract to mutltiple functions, one for hide, one for unhide, one for game start)
var board = document.querySelector("#board");
var keyPress = document.getElementById("key-press");

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
        if (board.style.visibility === "hidden") {
            board.style.visibility = "visible";
        } else {
            board.style.visibility = "visible";
        }
    })
}
beginHide();
displayBoard();


//Array containing all words
const words = ["wordone", "wordnumbertwo", "wordthree", "thelongestwordhere"]

// Variables declared for each index
const a = words[0]

//Split chars in word into an array
let aChar = a.split("");

//initialize first word
index = 0


// for (var i = 0; i < words.length; i++) {
//     if () {

//     } else {
//         index++;
//     }

//     // function initializing game
// }

// displaying blanks to word
let wordIndex = words[index]
let chars = wordIndex.split("");
let blank = [];
let placeholder = "_ "

// Creates an array to access and display each character in word
for (var i = 0; i < chars.length; i++) {
    var span = document.createElement("span");
    span.textContent = placeholder;
    board.append(span);
    blank.push(placeholder);
}

// function keyTest(ent) {
//     document.onkeyup = function (letter) {
//         var userGuess = letter.key;
//         if (userGuess === ent) {
//             pSpan.textContent = (ent)
//         }
//     }
// }

// function checkLetter() {
//     if (keyTest === aChar[0]) {
//         arr[0].textContent = aChar[0];
//     }

// }