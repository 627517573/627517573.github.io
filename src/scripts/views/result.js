var resultTpl = require('../tpl/result.string');
SPA.defineView('result',{
	html:resultTpl,
	plugins:['delegated'],
	bindActions:{
		'resultshide':function(){
			
			this.hide();
		}
	}
	
});