var i=0;
var button={
    value:["A","B","C","D"],
}
var prompt=[{
    question:"What is the largest turtle?",
    correctLetter:button.value[1],
    correctResponse:button.value[1],
    response:[
        "The African Helmeted Turtle",
        "The Leatherback Turtle",
        "The Roti Island Snake-Necked Turtle",
        "The Mata Mata Turtle"
    ]

},
{
    question:""
}
];

$("#question-screen").hide();
$("results-screen").hide();
$("#start-button").on("click",function(){
i=0;
$("#start-screen").hide();
$("#question-screen").show();
$("#question-number").html("Question Number "+(i+1)+":");
$("#question").html(prompt[i].question);

$("#a-text").html(button.value[0]+": "+prompt[i].response[0]);
$("#b-text").html(button.value[1]+": "+prompt[i].response[1]);
$("#c-text").html(button.value[2]+": "+prompt[i].response[2]);
$("#d-text").html(button.value[3]+": "+prompt[i].response[3]);
});
