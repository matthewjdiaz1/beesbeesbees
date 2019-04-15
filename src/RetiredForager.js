var RetiredForagerBee = function () {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

retiredForagerBeeConstructor = RetiredForagerBee.prototype.constructor;
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = retiredForagerBeeConstructor;

RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function (winnings) {
  this.treasureChest.push(winnings);
};