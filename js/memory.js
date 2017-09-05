function Card(val) {
  var cards = ["heartAce","2heart","3heart","4heart","5heart","heartAce","2heart","3heart","4heart","5heart"];
  this.value = val;
  this.isFlipped = false;

}

Card.prototype.assignType = function (i) {
  this.type = this.cards[i];
};
