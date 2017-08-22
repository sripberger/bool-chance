const boolChance = require('../lib');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

describe('boolChance', function() {
	describe('::get', function() {
		beforeEach(function() {
			sinon.stub(Math, 'random').returns(0.5);
		});

		afterEach(function() {
			Math.random.restore();
		});

		it('gets a random float in [0, 1)', function() {
			boolChance.get();

			expect(Math.random).to.be.calledOnce;
			expect(Math.random).to.be.calledOn(Math);
		});

		it('returns true if random float is less than rate', function() {
			expect(boolChance.get(0.51)).to.be.true;
		});

		it('returns false if random float is equal than rate', function() {
			expect(boolChance.get(0.5)).to.be.false;
		});

		it('returns false if random float is greater than rate', function() {
			expect(boolChance.get(0.49)).to.be.false;
		});

		it('returns false if rate is undefined', function() {
			expect(boolChance.get()).to.be.false;
		});
	});
});
