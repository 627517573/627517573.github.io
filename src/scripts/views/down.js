var downsTpl = require('../tpl/down.string');
SPA.defineView('down',{
	html:downsTpl,
	plugins:['delegated'],
	bindActions:{
		'downshide':function(){
			
			this.hide();
		},
		'resultOpen':function(){
			SPA.open('result');
		}
	}
	
});