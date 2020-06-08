$(document).ready(function() {
  $("#output").click(function() {

    let suits = ["of Diamonds", "of Hearts", "of Spades", "of Clubs"]
    let numbers = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    let deck = [];
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        deck.push(number + " " + suit);
      });
    });

    
    deck.forEach(function(card) {
      $("ul#outputDeck").append("<li>" + card + "</li>");
    });
    

  });

});