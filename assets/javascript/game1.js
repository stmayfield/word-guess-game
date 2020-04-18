//Array containing words
const words = ["wordone", "wordtwo", "wordthree", "thelongestwordhere"]

//Each word from array assigned to a variable
const one = words[0]
const two = words[1]
const three = words[2]
const four = words[3]


wordIndex = 0

//Returns an array of each character of a defined word
function wordDisplay(word) {
    for (var i = 0; i < word.length; i++) {
        word.charAt(i);
    }
    return word;
}

//Generates the number of blanks for each letter of a word

function addTextNode(underscore) {
    var newtext = document.createTextNode(underscore),
        guessLine = document.getElementById("paragraph");
    guessLine.appendChild(newtext);
}

function numOfChar(eachWord) {
    for (var i = 0; i < eachWord.length; i++) {
        addTextNode("_" + " ");
    }
    return eachWord;
}


//Assigns each array of characters to a variable respective to each word
var firstDisplay = wordDisplay(one);
var secondDisplay = wordDisplay(two);
var thirdDisplay = wordDisplay(three);

console.log(firstDisplay[5])
console.log(secondDisplay[5])
console.log(thirdDisplay[5])





/*
var p1 = document.getElementById("paragraph")


function keyTest(letterEntered) {
    document.onkeyup = function (letter) {
        var userGuess = letter.key;
        if (userGuess === letterEntered) {
            p1.textContent = (letterEntered)
        }
    }

}


if (keyTest(firstDisplay[0])) {
    p1.textContent = firstDisplay[0]
}

if (keyTest(firstDisplay[2])) {
    p1.textContent = firstDisplay[2]
}





var h1El = document.createElement("h1");
h1El.textContent = "Welcome to my page";
document.body.appendChild(h1El);
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
