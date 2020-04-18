//Array containing words
const words = ["wordone", "wordtwo", "wordthree", "thelongestwordhere"]

//Each word from array assigned to a variable
const a = words[0]
const b = words[1]
const c = words[2]
const d = words[3]

wordIndex = 0

//Each char in each word separeted into array
var aChar = a.split("");
var bChar = b.split("");
var cChar = c.split("");
var dChar = d.split("");


//show number of blanks for each char in word


//blanks must be individually acessible (array of underscores?)

var wordClass = document.querySelector(".class")

var arr = [];


function underscore() {
    var span = document.createElement("span");
    span.textContent = "_ ";
    wordClass.append(span);

}


function blankLength(char) {
    for (var i = 0; i < char.length; i++) {
        underscore();
    }
}

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// Displays underscore for each char of 1st word

blankLength(a);

var pSpan = document.querySelector("#paragraph")

//Accepts onkeyup letter
function keyTest(ent) {
    document.onkeyup = function (letter) {
        var userGuess = letter.key;
        if (userGuess === ent) {
            pSpan.textContent = (ent)
        }
    }
}

function checkLetter() {
    if (keyTest === aChar[0]) {
        arr[0].textContent = aChar[0];
    }

}


//underscore array. 


// var p1 = pSpan.textContent = aChar;
// var pSpan = document.querySelector("#paragraph")
// pSpan.textContent = "_ "

function addNode(x) {
    var y = document.createTextNode(x),
        pSpan = document.querySelector("#paragraph")
    pSpan.appendChild(y);
}

function numChar(xx) {
    for (var i = 0; i < xx.length; i++) {
        addTextNode("_" + " ");
    }
    return xx;
}
