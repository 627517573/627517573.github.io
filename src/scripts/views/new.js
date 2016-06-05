var newsTpl = require('../tpl/new.string');
SPA.defineView('new',{
	html:newsTpl,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist3=[];
		}
	}],
	bindEvents:{
		'show':function(){
			var vm=this.getVM();
			 $.ajax({
	        	//url: '/api/getlivelist.php',
	        	url:'hunlimao/mock/livelist.json',
		        success: function (res) {
		        	vm.livelist3=res.data.gp4;
		        }
		    })
		}
	},
	bindActions:{
		'newshide':function(){
			this.hide();
		},
		'downOpen':function(){
			SPA.open('down');
		},
		'touch':function(){
			var _startclientY;
			var _endclientY;
			var _cha;
//			window.addEventListener('touchstart',function(ev){
//				alert(1);
//				_startclientY=parseInt(ev.targetTouches[0].clientY);
//				this.addEventListener('touchmove',function(evv){
//					console.log(evv);
//				},false);
//				
//			},false);
//			on('touchstart',function(ev){
//				_startclientY=parseInt(ev.targetTouches[0].clientY);
//				$('section').on('touchmove',function(qev){
//					console.log(qev)
//				});
//			});
			
			//_cha=_endclientY-_startclientY;
			
		}
	}
	
});