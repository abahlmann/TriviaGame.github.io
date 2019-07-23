var qi = 0;
var guess = "";
var correctAns = 0;
var incorrectAns = 0;
var incompleteAns = 0;
var guessed = false;
var button = {
    value: ["A", "B", "C", "D"],
}
var prompt = [
    {//0
        question: "What is the largest turtle?",
        correctLetter: button.value[1],
        response: [
            "The African Helmeted Turtle",
            "The Leatherback Turtle",
            "The Roti Island Snake-Necked Turtle",
            "The Mata Mata Turtle"
        ]

    },
    {//1
        question: "What is the scientific name for turtle's upper shell?",
        correctLetter: button.value[3],
        response: [
            "The Ziguam",
            "The Plastrom",
            "The Hard Part",
            "The Carapace"
        ]
    },
    {//2
        question: "How big is the largest sea turtle?",
        correctLetter: button.value[2],
        response: [
            "1 foot long",
            "3 feet long",
            "6 feet long",
            "10 feet long"
        ]
    },
    {//3

    }


];

//functions
function compareValue(x, y) {
    if (x === y) {
        correctAns++;
    }
    else {
        incorrectAns++;
    }
};//end compareValue()

var intervalId;
var number = 30;
function interval(){
    number=5;
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        number--;
        $("#countdown").html(number + " Seconds Remaining");

        if (number === 0) {
            clearInterval(intervalId)
            if (!guessed) {
                incompleteAns++;
            };

            if (qi < prompt.length - 1) {
                qi++;
                displayQuestion(qi);
            }
            else if (qi===prompt.length-1) {
                displayResults();
            }
        }
    }, 1000);
}

function displayQuestion(i) {
    guessed = false;
    number=30;
    console.log(number + " " + i);

    $("#question-number").html("Question Number " + (i + 1) + ":");
    $("#question").html(prompt[i].question);

    $("#a-text").html(button.value[0] + ": " + prompt[i].response[0]);
    $("#b-text").html(button.value[1] + ": " + prompt[i].response[1]);
    $("#c-text").html(button.value[2] + ": " + prompt[i].response[2]);
    $("#d-text").html(button.value[3] + ": " + prompt[i].response[3]);

    interval();
}//end displayQuestion()

function displayResults() {
    $("#results-screen").show();
    $("#question-screen").hide();
    $("#correct").html("Correct Answers: " + correctAns);
    $("#incorrect").html("Incorrect Answers: " + incorrectAns);
    $("#incomplete").html("Missed answers: " + incompleteAns);
}

//click functions
$("#a").on("click", function () {
    guess = button.value[0];
    compareValue(prompt[qi].correctLetter, guess);
    guessed = true;
    if (qi < prompt.length - 1) {
        displayQuestion(qi);
        interval();
        qi++;
    }
    else {
        displayResults();
    }
});//end a fxn


$("#b").on("click", function () {
    guess = button.value[1];
    compareValue(prompt[qi].correctLetter, guess);
    clearInterval(intervalId);
    guessed = true;
    if (qi < prompt.length - 1) {
        displayQuestion(qi);
        qi++;
    }
    else {
        displayResults();
    }
});//end b fxn


$("#c").on("click", function () {
    guess = button.value[2];
    compareValue(prompt[qi].correctLetter, guess);
    clearInterval(intervalId);
    guessed = true;
    if (qi < prompt.length - 1) {
        displayQuestion(qi);
        qi++;
    }
    else {
        displayResults();
    }
});//end c fxn

$("#d").on("click", function () {
    guess = button.value[3];
    compareValue(prompt[qi].correctLetter, guess);
    clearInterval(intervalId);
    guessed = true;
    if (qi < prompt.length - 1) {
        displayQuestion(qi);
        qi++;
    }
    else {
        displayResults();
    }
});//end click fxn


//start button fxn
$("#start-button").on("click", function () {
    qi = 0;
    $("#start-screen").hide();
    $("#question-screen").show();
    displayQuestion(qi);
    interval();
});//end start-button fxn

$("#cancel-button").on("click", function () {
    $("#question-screen, #results-screen").hide();
    $("#start-screen").show();
    correctAns = 0;
    incompleteAns = 0;
    incorrectAns = 0;
    qi = -1;
    guessed = false;
}); //end cancel-button fxn

//next/new game button
$("#next-button").on("click", function () {
    $("#question-screen, #results-screen").hide();
    $("#start-screen").show();
    correctAns = 0;
    incompleteAns = 0;
    incorrectAns = 0;
    qi = -1;
    guessed = false;
})

//on load
$("#question-screen, #results-screen").hide();

