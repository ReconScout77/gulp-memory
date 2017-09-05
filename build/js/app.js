(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(event){
  var cardsMatched = 0;
  var cardObjects = [];
  var matchingCards = [];
  console.log(cardObjects.length);
  var lastFlipped = "";
  var matchedCards = [];
  var lastClicked = "";

  var addCardObject = function (card) {
    if (lastFlipped === card.value) {
      matchedCards.push(card.value);
      lastFlipped = "";
    } else {
      lastFlipped = card.value;
    }
  }

  $(".front").hide();

  $("#one").click(function(){
    var clicked = "one";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#one .front").toggle();
        $("#one .back").toggle();
        lastClicked = "one";
        console.log(matchedCards);
      }
    }
  });

  $("#two").click(function(){
    var clicked = "two";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#two .front").toggle();
        $("#two .back").toggle();
        lastClicked = "two";
        console.log(matchedCards);
      }
    }
  });

  $("#three").click(function(){
    var clicked = "three";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#three .front").toggle();
        $("#three .back").toggle();
        lastClicked = "three";
        console.log(matchedCards);
      }
    }
  });

  $("#four").click(function(){
    var clicked = "four";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#four .front").toggle();
        $("#four .back").toggle();
        lastClicked = "four";
        console.log(matchedCards);
      }
    }
  });

  $("#five").click(function(){
    var clicked = "five";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#five .front").toggle();
        $("#five .back").toggle();
        lastClicked = "five";
        console.log(matchedCards);
      }
    }
  });

  $("#six").click(function(){
    var clicked = "six";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#six .front").toggle();
        $("#six .back").toggle();
        lastClicked = "six";
        console.log(matchedCards);
      }
    }
  });

  $("#seven").click(function(){
    var clicked = "seven";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#seven .front").toggle();
        $("#seven .back").toggle();
        lastClicked = "seven";
        console.log(matchedCards);
      }
    }
  });

  $("#eight").click(function(){
    var clicked = "eight";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#eight .front").toggle();
        $("#eight .back").toggle();
        lastClicked = "eight";
        console.log(matchedCards);
      }
    }
  });

  $("#nine").click(function(){
    var clicked = "nine";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#nine .front").toggle();
        $("#nine .back").toggle();
        lastClicked = "nine";
        console.log(matchedCards);
      }
    }
  });

  $("#ten").click(function(){
    var clicked = "ten";
    if (!(clicked === lastClicked)) {
      var cardValue = $(this).children(".cardValue").val();
      var card = new Card(cardValue);
      //card.isFlipped = true;
      if(!(matchedCards.includes(card.value))) {
        addCardObject(card);
        $("#ten .front").toggle();
        $("#ten .back").toggle();
        lastClicked = "ten";
        console.log(matchedCards);
      }
    }
  });

});

},{}]},{},[1]);
