var player1 = "";
var player2 = "";

var throwDice = function() {
  return Math.floor(Math.random()*6)+1;
}

function Player(turn) {
  this.roll = 0;
  this.roundScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.roundScore = 0;
    alert(this.playerName + ", "  + "you are unlucky, you rolled 1! Pass over the dice!")
  } else {
    this.roundScore += this.roll;
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  alert(this.playerName + ", pass over the dice")
}

Player.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("CONGARATULATIONS" + this.playerName + ", you are the winner!")
  }
}

Player.prototype.newGame = function() {
  this.roll = 0;
  this.roundScore = 0;
  this.totalScore = 0
  this.playerName = "";
}
var clearValues = function() {
  $(".player1Name").val("");
  $(".player2Name").val("");
}

$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    player1 = new Player(true);
    player2 = new Player(false);
    $(".game").show();
    $(".info").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name).val();

    player1.playerName = player1Name;
    player2.playerName = player2Name;
  });


  $("button#roll-p1").click(function(event) {
    event.preventDefault();
    player1.roll = throwDice();
    $("#die-p1").text(player1.roll);
    player1.rollOne();
    $("#round-total-1").text(player1.roundScore);
  });

  $("button#roll-p2").click(function(event) {
    event.preventDefault();
    player2.roll = throwDice();
    $("#die-p2").text(player2.roll);
    player2.rollOne();
    $("#round-total-2").text(player2.roundScore);
  });

  $("button#hold-p1").click(function(event) {
    event.preventDefault();
    player1.hold();
    $("#total-score-1").text(player1.totalScore);
    $("#round-total-1").empty();
    $("#die-p1").empty();
    player1.winner();
  });

  $("button#hold-p2").click(function(event) {
    event.preventDefault();
    player2.hold();
    $("#total-score-2").text(player2.totalScore);
    $("#round-total-2").empty();
    $("#die-p2").empty();
    player2.winner();
  });



});
