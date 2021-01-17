var GrowingDancer = function (top, left, timeBetweenSteps) {
  this.sizeIndex = 1;
  makeDancer.call(this, top, left, timeBetweenSteps, 'blue');
};

GrowingDancer.prototype = Object.create(makeDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.sizeIndex += 2;
  this.$node.css('border-width', this.sizeIndex % 20);
};