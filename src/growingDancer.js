var GrowingDancer = function (top, left, timeBetweenSteps) {
  this.sizeIndex = 0;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

GrowingDancer.prototype = Object.create(makeDancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.sizeIndex++;

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css('border-width', this.sizeIndex % 20);
};