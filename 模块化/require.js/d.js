define(['d-util.js'],function(dUtil){
	var d = {
		printDate: function(date){
			console.log(dUtil.dGetFormatDate(date));
		}
	}

	return d;
});