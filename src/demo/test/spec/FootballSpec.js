const expect = require('chai').expect;
const rewire = require('rewire');
const data = require('../../server/data/fotboll.json');
const service = require('../../server/services/football.js');

describe("Football league Service", function() {

  describe("Football league service public functions", function() {
    const service = require('../../server/services/football.js');

    it("should make nice only Swedish league messages", function() {
      expect(service.swedish(data)).to.equal("Allsvenskan, Division 1 Norra & Superettan");
    });

    it("should make nice all league messages", function() {
      expect(service.all(data)).to.equal("Allsvenskan, Division 1 Norra, Premier League & Superettan");
    });

    it("should handle empty league arrays", function() {
      expect(service.swedish([])).to.equal("No result");
    });
  });

  describe("Football league service private functions", function() {
    const rewired = rewire('../../server/services/football.js');

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

    it("adds '&' before last league or returns 'No results'", function() {
      const beautify = rewired.__get__('beautify');
      const ugly = 'foo, bar, erp, derp';
      const nice = beautify(ugly)

      expect(nice).to.equal('foo, bar, erp & derp');
      expect(beautify('')).to.equal('No result');
    });

  });
});
