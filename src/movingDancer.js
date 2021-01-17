var MovingDancer = function(top, left, timeBetweenSteps) {
  this.speed = 5;
  this.targetDancer = this.setTarget();
  makeDancer.call(this, top, left, timeBetweenSteps);
};

MovingDancer.prototype = Object.create(makeDancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  // add if statement here re: retargeting only if we're sufficiently far from target
  this.moveDancer();


};

MovingDancer.prototype.setTarget = function() {
  var sortedDancers = window.dancers.slice().sort(function (a, b) {
    var aRelativeLocation = [Math.abs(a.top - this.top), Math.abs(a.left - this.left)];
    var bRelativeLocation = [Math.abs(b.top - this.top), Math.abs(b.left - this.left)];
    var aRelativeDistance = Math.sqrt(Math.pow(aRelativeLocation[0], 2) + Math.pow
    (aRelativeLocation[1], 2));
    var bRelativeDistance = Math.sqrt(Math.pow(bRelativeLocation[0], 2) + Math.pow(bRelativeLocation[1], 2));
    if (aRelativeDistance < bRelativeDistance) {
      return -1;
    } else if (aRelativeDistance > bRelativeDistance) {
      return 1;
    } else {
      return 0;
    }
  });
  var targetDancer = sortedDancers[Math.floor(sortedDancers.length / 2)];
  return targetDancer;
};

MovingDancer.prototype.moveDancer = function() {
  var distanceToTarget = Math.sqrt(Math.pow(Math.abs(this.top - this.targetDancer.top), 2) + Math.pow(Math.abs(this.left - this.targetDancer.left), 2));
  if (distanceToTarget < 50) {
    this.targetDancer = this.setTarget();
  } else {
    if (this.top - this.targetDancer.top > 0) {
      this.top = this.top - this.speed;
    } else if (this.top - this.targetDancer.top < 0) {
      this.top = this.top + this.speed;
    }
    if (this.left - this.targetDancer.left > 0) {
      this.left = this.left - this.speed;
    } else if (this.left - this.targetDancer.left < 0) {
      this.left = this.left + this.speed;
    }
  }
  this.setPosition(this.top, this.left);
};