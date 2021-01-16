var ColorfulDancer = function (top, left, timeBetweenSteps) {
  this.colorIndex = 0;
  this.colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  makeDancer.call(this, top, left, timeBetweenSteps);
};

ColorfulDancer.prototype = Object.create(makeDancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

ColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  this.colorIndex++;

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.css('border-color', this.colorArray[this.colorIndex % 6]);
};
