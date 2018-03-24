define(['util.js'],function(util){
	var dUtil = {
		dGetFormatDate:function(date){
			return util.getFormatDate(date, 2);
		}
	}

	return dUtil;
});