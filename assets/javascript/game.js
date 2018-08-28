$(document).ready(function() {

    function randomizer() {
    var crystalNums = [];
    var newNum;
    while(crystalNums.length < 4) {
      currentValue = Math.floor(Math.random() * 12) + 1;
  
      if(crystalNums.indexOf(currentValue) < 0) {
        crystalNums.push(currentValue);
      }
    }
  
    var newNum = Math.floor(Math.random() * 100)+19;
    
    return {
      crystals: crystalNums,
      goal: newNum,
    };
    console.log("Goal number: " + goal.newNum);
  }
  
  $(function() {
    var setup = randomizer();
  
     $("#new-Num").text(setup.goal);
    // console.log(setup.goal);
    // $("#quartz").val(setup.crystals[0]);
    // console.log(setup.crystals[0]);
    // $("#diamond").val(setup.crystals[1]);
    // console.log(setup.crystals[1]);
    // $("#topaz").val(setup.crystals[2]);
    // console.log(setup.crystals[2]);
    // $("#emerald").val(setup.crystals[3]);
    // console.log(setup.crystals[3]);
  for (var i = 0; i < setup.crystals.length; i++) {
  var imageCrystal = $("<button>");
  
  imageCrystal.attr("data-crystalvalue", setup.crystals[i]);
  
  $("<button>").append(imageCrystal);
  
  
  }
    $(".btn-choice").on("click", function() {
      var counter = 0;
      var wins = 0
      var losses = 0
      // for (var i = 0; i < setup.crystals.length; i++){
      var playerPick = ($(this).attr("data-crystalvalue"));
      playerPick = parseInt(playerPick);
      console.log(playerPick);
      counter += playerPick;
      $("#currScore").text(counter);
      console.log("counter: " + parseInt(counter));
      if(counter == setup.goal) {
          $("#result").text("You won!");
          wins++;
          $("winCount").text(wins);
      } else {
          $("#result").text("You lost ☹️");
        losses++;
        $("lossCount").text(losses);
      }
    })//this goes to $(".btn-choice").on("click", function() { line *// 
  }) // this goes to $(function() {
    });
  