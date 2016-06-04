var newsTpl = require('../tpl/new.string');
SPA.defineView('new',{
	html:newsTpl,
	plugins:['delegated'],
	bindActions:{
		'newshide':function(){
			this.hide();
		},
		'touch':function(){
			var _startclientY;
			var _endclientY;
			var _cha;
			$('section').on('touchstart',function(ev){
				_startclientY=parseInt(ev.targetTouches[0].clientY);
				$('section').on('touchend',function(qev){
					_endclientY=parseInt(ev.targetTouches[0].clientY);
				});
			});
			
			//_cha=_endclientY-_startclientY;
			console.log(_endclientY)
		}
	}
});