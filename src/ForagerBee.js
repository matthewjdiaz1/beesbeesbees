var ForagerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen'
  this.canFly = true;
  this.treasureChest = [];
};

var foragerBeeConstructor = ForagerBee.prototype.constructor;
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = foragerBeeConstructor

ForagerBee.prototype.forage = function (foraged) {
  this.treasureChest.push(foraged);
};