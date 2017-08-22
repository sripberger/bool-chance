/**
 * Returns a random boolean, with the provided chance of true.
 * @param {Number} rate Chance of true out of 1.
 * @returns {Boolean}
 */
exports.get = function(rate) {
	return Math.random() < rate;
};
