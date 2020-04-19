//Hide all HTML Elements, Unhide board (extract to mutltiple functions, one for hide, one for unhide, one for game start)
const board = document.querySelector(".board");
const keyPress = document.getElementById("key-press");
const score = document.getElementById("score");
let leftGuess = 5

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


//initialize first word
index = 0


onKeyPress(anyChar);


//For loop cycles through all words in array
for (i = 0; i < words.length; i++) {

    //Split chars in word into an array
    var wordCycle = words[i].split("");

    //For loop cycles through and checks all characters
    for (i = 0; i < wordCycle.length; i++) {
        var anyChar = wordCycle[i]
    }
}



// if () {
//     // run all below fuctions
// } else {
//     index++;
// }


// if (userGuess !== "w", "o", "r", "d", "n", "e") {
//     leftGuess - 1
// } else {
//     spanNodes[i + 2] = userGuess
// }






// displaying blanks to word
let wordIndex = words[index]
let chars = wordIndex.split("");
let blank = [];
let placeholder = " "
let undscrString = "_"

// Creates an array to access and display each character in word
for (var i = 0; i < chars.length; i++) {
    if (i < chars.length) {
        var span = document.createElement("span");
        span.textContent = placeholder + undscrString;
        board.append(span);
        blank.push(undscrString);
    } else {
        break;
    }
}

var spanNodes = document.firstElementChild.childNodes[2].childNodes[1].childNodes[3].childNodes

// if/else block for first value in words array
function onKeyPress(ent) {
    document.onkeyup = function (event) {
        var userGuess = event.key;
        if (userGuess === ent) {
            spanNodes[i + 2] = userGuess;
        } else {
            return;
        }
    }
}



//         else if (userGuess === "o") {
//             document.body.firstElementChild.lastElementChild.childNodes[3].textContent = "o";
//             document.body.firstElementChild.lastElementChild.childNodes[6].textContent = "o";
//         } else if (userGuess === "r") {
//             document.body.firstElementChild.lastElementChild.childNodes[4].textContent = "r";
//         } else if (userGuess === "d") {
//             document.body.firstElementChild.lastElementChild.childNodes[5].textContent = "d";
//         } else if (userGuess === "n") {
//             document.body.firstElementChild.lastElementChild.childNodes[7].textContent = "n";
//         } else if (userGuess === "e") {
//             document.body.firstElementChild.lastElementChild.childNodes[8].textContent = "e";
//         } else if (userGuess !== "w", "o", "r", "d", "n", "e") {
//             var score = getElementById("#score");
//             var count = localStorage.getItem("count")
//             score.textContent = count;
//             count--;
//             score.textContent = count;
//             localStorage.setItem("count", count);
//         }
//     }
// }







// textAreaEl.addEventListener("keydown", function (event) {
//     var key = event.key.toLowerCase();
//     var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//     if (alphabetNumericCharacters.includes(key)) {
//         elements.forEach(function (element) {
//             element.textContent += event.key;
//         });
//     }
// });



