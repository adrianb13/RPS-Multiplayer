$(document).ready(function(){ 

    var p1wins = 0;
    var p2wins = 0;

    var p1rock = false;
    var p1paper = false;
    var p1scissors = false;
    var p1pick = "";

    var p2rock = false;
    var p2paper = false;
    var p2scissors = false;
    var p2pick = "";

    $("#rock1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1rock = true;
        p1paper = false;
        p1scissors = false;
        p1pick = "Rock";
        gameplay();
        console.log(p1rock);
    });

    $("#paper1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1paper = true;
        p1rock = false;
        p1scissors = false;
        p1pick = "Paper";
        gameplay();
        console.log(p1paper);
    });

    $("#scissors1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1scissors = true;
        p1paper = false;
        p1rock = false;
        p1pick = "Scissors";
        gameplay();
        console.log(p1scissors);
    });

    $("#rock2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2rock = true;
        p2paper = false;
        p2scissors = false;
        p2pick = "Rock";
        gameplay();
        console.log(p2rock);
    });

    $("#paper2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2paper = true;
        p2rock = false;
        p2scissors = false;
        p2pick = "Paper";
        gameplay();
        console.log(p2paper);
    });

    $("#scissors2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2scissors = true;
        p2rock = false;
        p2paper = false;
        p2pick = "Scissors";
        gameplay();
        console.log(p2scissors);
    });

function gameplay () {
    if ((p1paper === true && p2rock === true) || (p1rock === true && p2scissors === true) || (p1scissors === true && p2paper === true)) {
        $("#winner").text("Player 1 with " + p1pick);
        p1wins ++;
        $("#p1-Wins").text(p1wins);
        if (p1paper === true) {
            $("#winDisplay").attr("class", "paper")
        } else if (p1rock === true) {
            $("#winDisplay").attr("class", "rock")
        } else if (p1scissors === true) {
            $("#winDisplay").attr("class", "scissors")
        }
        clear();
    } else if ((p2paper === true && p1rock === true) || (p2rock === true && p1scissors === true) || (p2scissors === true && p1paper === true)) {
        $("#winner").text("Player 2 with " + p2pick);
        p2wins ++;
        $("#p2-Wins").text(p2wins);
        if (p2paper === true) {
            $("#winDisplay").attr("class", "paper")
        } else if (p2rock === true) {
            $("#winDisplay").attr("class", "rock")
        } else if (p2scissors === true) {
            $("#winDisplay").attr("class", "scissors")
        }
        clear();
    } else if ((p1paper === true && p2paper === true) || (p1rock === true && p2rock === true) || (p1scissors === true && p2scissors === true)) {
        $("#winner").text("Tie! Pick Again");
        if (p1paper === true) {
            $("#winDisplay").attr("class", "paper")
        } else if (p1rock === true) {
            $("#winDisplay").attr("class", "rock")
        } else if (p1scissors === true) {
            $("#winDisplay").attr("class", "scissors")
        }
        clear();
    }
}

function clear () {
    p1rock = false;
    p1paper = false;
    p1scissors = false;
    p1pick = "";

    p2rock = false;
    p2paper = false;
    p2scissors = false;
    p2pick = "";
}

});