function getRank(gameMode, mods, acc, c300, c100, c50, cmiss) {
	var total = c300+c100+c50+cmiss;

	// Hidden | Flashlight | FadeIn
	var hdfl = (mods & (1049608)) > 0;

	var ss = hdfl ? "<:ssh:829606782703239188>" : "<:ss:829606782695112704>";
	var s = hdfl ? "<:sh:829606782690918451>" : "<:sosu:829607265286881292>";

	switch(gameMode) {
		case 0:
		case 1:
			var ratio300 = c300 / total;
			var ratio50 = c50 / total;

			if (ratio300 == 1)
				return ss;

			if (ratio300 > 0.9 && ratio50 <= 0.01 && cmiss == 0)
				return s;

			if ((ratio300 > 0.8 && cmiss == 0) || (ratio300 > 0.9))
				return "<:aosu:829608584723562506>";

			if ((ratio300 > 0.7 && cmiss == 0) || (ratio300 > 0.8))
				return "<:bosu:829606782300585985>";

			if (ratio300 > 0.6)
				return "<:cosu:829606782715691017>";

			return "<:dosu:829606782145396778>";

		case 2:
			if (acc == 100)
				return ss;

			if (acc > 98)
				return s;

			if (acc > 94)
				return "<:aosu:829608584723562506>";

			if (acc > 90)
				return "<:bosu:829606782300585985>";

			if (acc > 85)
				return "<:cosu:829606782715691017>";

			return "<:dosu:829606782145396778>";

		case 3:
			if (acc == 100)
				return ss;

			if (acc > 95)
				return s;

			if (acc > 90)
				return "<:aosu:829608584723562506>";

			if (acc > 80)
				return "<:bosu:829606782300585985>";

			if (acc > 70)
				return "<:cosu:829606782715691017>";

			return "<:dosu:829606782145396778>";
	}
}

module.exports = { getRank }
