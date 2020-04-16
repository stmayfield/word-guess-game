const words = ["wordone", "wordtwo", "wordthree"]

const one = words[0]
const two = words[1]
const three = words[2]

function wordDisplay(word) {
    for (var i = 0; i < word.length; i++) {
        word.charAt(i);
    }
    return word;
}

var firstDisplay = wordDisplay(one);
var secondDisplay = wordDisplay(two);
var thirdDisplay = wordDisplay(three);


console.log(firstDisplay[5])
console.log(secondDisplay[5])
console.log(thirdDisplay[5])


function keyTest(letterEntered) {
    document.onkeyup = function (letter) {
        var userGuess = letter.key;
        if (userGuess === letterEntered) {
            console.log(letterEntered);
        }
    }

}


if (keyTest(firstDisplay[0])) {

    console.log("w");

} else if (keyTest(firstDisplay[2])) {

    console.log("r");
} else {

    console.log("error")
}