const expect = require('chai').expect;
const rewire = require('rewire');
const data = require('../../server/data/fotboll.json');
const rewired = rewire('../../server/services/football.js');

describe("Football league service private functions", function() {


	it("should be able to filter out swedish leauges", function() {
		const onlySwedish = rewired.__get__('onlySwedish');
		const list = ['foo', 'bar', 'Allsvenskan'];
		const result = onlySwedish(list);

		expect(result).to.be.instanceof(Array);
		expect(result.length).to.equal(1);
		expect(result[0]).to.equal('Allsvenskan');
	});

	it("should sort a list by names", function() {
		const sortByName = rewired.__get__('sortByName');
		const list = ['foo', 'bar'];
		const result = sortByName(list)

		expect(result).to.be.instanceof(Array);
		expect(result.length).to.equal(2);
		expect(result[0]).to.equal('bar');
		expect(result[1]).to.equal('foo');
	});

	it("adds '&' before last league or returns 'No result' if beautify is called", function() {
		const beautify = rewired.__get__('beautify');
		const ugly = 'foo, bar, erp, derp';
		const nice = beautify(ugly)

		expect(nice).to.equal('foo, bar, erp & derp');
		expect(beautify('')).to.equal('No result');
	});

	it("always returns 'No result' if noResult is called ", function() {
		const noResult = rewired.__get__('noResult');

		expect(noResult('foo')).to.equal('No result');
		expect(noResult()).to.equal('No result');
	});

});
