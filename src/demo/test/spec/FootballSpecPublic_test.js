const expect = require('chai').expect;
const rewire = require('rewire');
const data = require('../../server/data/fotboll.json');
const service = require('../../server/services/football.js');

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
