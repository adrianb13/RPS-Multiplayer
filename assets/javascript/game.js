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

// Player On-Clicks
    $("#rock1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1rock = true;
        p1paper = false;
        p1scissors = false;
        p1pick = "Rock";
        gameplay();
    });

    $("#paper1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1paper = true;
        p1rock = false;
        p1scissors = false;
        p1pick = "Paper";
        gameplay();
    });

    $("#scissors1").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p1scissors = true;
        p1paper = false;
        p1rock = false;
        p1pick = "Scissors";
        gameplay();
    });

    $("#rock2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2rock = true;
        p2paper = false;
        p2scissors = false;
        p2pick = "Rock";
        gameplay();
    });

    $("#paper2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2paper = true;
        p2rock = false;
        p2scissors = false;
        p2pick = "Paper";
        gameplay();
    });

    $("#scissors2").on("click", function(){
        $("#winner").text("");
        $("#winDisplay").attr("class", "none");
        p2scissors = true;
        p2rock = false;
        p2paper = false;
        p2pick = "Scissors";
        gameplay();
    });

// Rock, Paper, Scissors Gameplay
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
        saveFirebase();
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
        saveFirebase();
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
        saveFirebase();
        clear();
    }
}

// Reset Choices
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
// Firebase Configuration
var config = {
    apiKey: "AIzaSyCAd0iWhWhiLsdwLSdnRdLE0DFhWE3M9HQ",
    authDomain: "rock-paper-scissors-41024.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-41024.firebaseio.com",
    projectId: "rock-paper-scissors-41024",
    storageBucket: "rock-paper-scissors-41024.appspot.com",
    messagingSenderId: "109194553390"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

function saveFirebase () {
    database.ref("/Player1").set({
        P1WinCount: p1wins,
        P1Choice: p1pick 
    });
    
    database.ref("/Player2").set({
        P2WinCount: p2wins,
        P2Choice: p2pick 
    });

    database.ref("/Chat").set({
        GameChat: convo
    });
};
  
database.ref("/Player1").on("value", function(snapshot) {
        p1wins = snapshot.val().P1WinCount;
        $("#p1-Wins").text(p1wins);
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

database.ref("/Player2").on("value", function(snapshot) {
        p2wins = snapshot.val().P2WinCount;
        $("#p2-Wins").text(p2wins);
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

database.ref("/Chat").on("value", function(snapshot) {
        convo = snapshot.val().GameChat;
        $("#chatdisplay").text(convo);
    }, function(errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

// Gamechat function
$("#send").on("click", function chat(){ 
    var convo = $("#chatbox").val().trim();
    $("#chatdisplay").append(convo + "<br>");
    $("#chatbox").val("");
    database.ref("/Chat").push({
        GameChat : convo
    });
});

});