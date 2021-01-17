var makeDancer = function(top, left, timeBetweenSteps, color) {
  this.$node = $('<span class="dancer" id=' + (window.dancers.length) + '></span>');
  this.$node.css('border-color', color);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(this.top, this.left);
  this.step();
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;
  this.$node.css(styleSettings);
};