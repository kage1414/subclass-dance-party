var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//  var makeBlinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // console.log(this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.oldStep(this.timeBetweenSteps);
  makeDancer.prototype.step.call(this);
  // this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};



// var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
//   var makeBlinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = makeBlinkyDancer.step;

//   makeBlinkyDancer.step = function () {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     makeBlinkyDancer.$node.toggle();
//   };

//   return makeBlinkyDancer;
// };