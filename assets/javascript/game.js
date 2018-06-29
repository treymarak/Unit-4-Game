$(document).ready(function(){

//Computer to choose a random number from 19-120
var random = Math.floor(Math.random()*101+19);

$(".computer").text(random);


//each crystal will have a random number hidden behind it

var gem1 = Math.floor(Math.random()*11+1);
var gem2 = Math.floor(Math.random()*11+1);
var gem3 = Math.floor(Math.random()*11+1);
var gem4 = Math.floor(Math.random()*11+1);

var userTotal = 0;
var wins = 0;
var losses = 0;

$(".total").text("Wins: " + wins);
$(".total").text("Losses: " + losses);

function reset(){

    random = Math.floor(Math.random()*101+19);
    $(".computer").text(random);
 
    gem1 = Math.floor(Math.random()*11+1);
    gem2 = Math.floor(Math.random()*11+1);
    gem3 = Math.floor(Math.random()*11+1);
    gem4 = Math.floor(Math.random()*11+1);

    userTotal = 0;

    $(".score").text(userTotal);
}

function winner() {

    $(".total").text("You Win!");

    wins++;
    $(".total").text(wins);
   reset()
}

function loser() {

    $(".total").text("You Lose!");

    losses++;
    $(".total").text(losses);
   reset()
}

$("#one").on("click", function(){

   userTotal = userTotal + gem1;

   $(".score").text(userTotal);

   if (userTotal === random){

       winner();

   }

   else if (userTotal > random){

       loser();
   }

   
});

$("#two").on("click", function(){

    userTotal = userTotal + gem1;
 
    $(".score").text(userTotal);
 
    if (userTotal === random){
 
        winner();
 
    }
 
    else if (userTotal > random){
 
        loser();
    }
 
    
 });

 $("#three").on("click", function(){

    userTotal = userTotal + gem1;
 
    $(".score").text(userTotal);
 
    if (userTotal === random){
 
        winner();
 
    }
 
    else if (userTotal > random){
 
        loser();
    }
 
    
 });

 $("#four").on("click", function(){

    userTotal = userTotal + gem1;
 
    $(".score").text(userTotal);
 
    if (userTotal === random){
 
        winner();
 
    }
 
    else if (userTotal > random){
 
        loser();
    }
 
    
 });



});