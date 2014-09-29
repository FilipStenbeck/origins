describe("Football util", function() {

    var footballUtil = require('../../utils/football-coffee.js');
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

  describe("Football util functions", function() {

  	it("should get leagues from matches", function() {
      expect(footballUtil.groupFromEvent(data)).toEqual(["Allsvenskan", "Division 1 Norra", "Premier League"]);
    });

    it("should get only Swedish", function() {
      var leauges = ["Allsvenskan", "Division 1 Norra", "Premier League"];
      expect(footballUtil.onlySwedish(leauges)).toEqual(["Allsvenskan", "Division 1 Norra"]);
    });

    it("should only show one of each", function() {
      var leauges = ["Allsvenskan", "Division 1 Norra", "Allsvenskan"];
    	expect(footballUtil.onlyOne(leauges)).toEqual(["Allsvenskan", "Division 1 Norra"]);
  	});

  	it("should know how to sort alphabetically", function() {
  		var leauges = ["Division 1 Norra", "Allsvenskan"];
    	expect(footballUtil.sortByName(leauges)).toEqual(["Allsvenskan", "Division 1 Norra"]);
  	});

  	it("should produce a String from the array", function() {
  		var leauges = ["Division 1 Norra", "Allsvenskan"];
    	expect(footballUtil.fold(leauges)).toEqual("Division 1 Norra, Allsvenskan");
  	});

  	it("should produce messages with comma and one & before last entry", function() {
  		var leauges = "Division 1 Norra, Allsvenskan";
    	expect(footballUtil.clean(leauges)).toEqual("Division 1 Norra & Allsvenskan");
  	});
  });

  describe("Football util public functions", function() {

    it("should make nice only Swedish league messages", function() {
      expect(footballUtil.swedish(data)).toEqual("Allsvenskan & Division 1 Norra");
    });

    it("should make nice league messages", function() {
      expect(footballUtil.all(data)).toEqual("Allsvenskan, Division 1 Norra & Premier League");
    });

    it("should handle empty league arrays", function() {
      expect(footballUtil.swedish([])).toEqual("No Result");
    });      
  });
});