var HoneyMakerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

var HoneyMakerBeeConstructor = HoneyMakerBee.prototype.constructor;
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = honeyConstructor;

HoneyMakerBee.prototype.makeHoney = function () {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function () {
  this.honeyPot--;
};