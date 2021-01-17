describe('subClassDanceParty', function () {

  describe('blinkyDancer', function() {

    var blinkyDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
    });

    it('should have a jQuery $node object', function() {
      expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
    });

    it('should have a step function that makes its node blink', function() {
      sinon.spy(blinkyDancer.$node, 'toggle');
      blinkyDancer.step();
      expect(blinkyDancer.$node.toggle.called).to.be.true;
    });

    describe('dance', function() {
      it('should call step at least once per second', function() {
        sinon.spy(blinkyDancer, 'step');
        expect(blinkyDancer.step.callCount).to.be.equal(0);
        clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
        clock.tick(timeBetweenSteps);

        expect(blinkyDancer.step.callCount).to.be.equal(1);

        clock.tick(timeBetweenSteps);
        expect(blinkyDancer.step.callCount).to.be.equal(2);
      });
    });
  });

  describe('colorfulDancer', function() {
    var colorfulDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      colorfulDancer = new ColorfulDancer(10, 20, timeBetweenSteps);
    });

    it('should have a step function that makes its color change', function() {
      colorfulDancer.step();
      expect(colorfulDancer.$node.css('border-color')).to.not.equal('darkolivegreen');
    });
  });

  describe('growingDancer', function() {
    var growingDancer, clock;
    var timeBetweenSteps = 100;

    beforeEach(function() {
      clock = sinon.useFakeTimers();
      growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
    });

    it('should have a step function that makes its size change', function() {
      growingDancer.step();
      expect(growingDancer.$node.css('border-width')).to.not.equal('10');
    });
  });
});