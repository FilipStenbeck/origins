describe("Backend", function() {
    var footballUtil = require('../../utils/football-es5.js');
    var data = [{
        "home": "Djurgården",
          "away": "IFK Göteborg",
          "start": "2014-03-12T16:00Z",
          "league": "Allsvenskan"
    },
    {
        "home": "Dalkurd FF",
        "away": "Väsby United",
        "start": "2014-06-25T17:00Z",
        "league": "Division 1 Norra"
    },
    {
        "home": "Arsenal",
        "away": "Manchester United",
        "start": "2014-07-25T17:00Z",
        "league": "Premier League"
    }];

  describe("Football util public functions", function() {

    it("should make nice only Swedish league messages", function() {
      expect(footballUtil.swedish(data)).toEqual("Allsvenskan & Division 1 Norra");
    });

    it("should make nice league messages", function() {
      expect(footballUtil.all(data)).toEqual("Allsvenskan, Division 1 Norra & Premier League");
    });

    it("should handle empty league arrays", function() {
      expect(footballUtil.swedish([])).toEqual("No result");
    });
  });
});