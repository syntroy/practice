define(function(){
	var util = {
		getFormatDate: function(date, type){
			if(type == 1){
				return '2018-03-24';
			}else if(type == 2){
				return '2018年3月24日';
			}
		}
	};
	return util;
});