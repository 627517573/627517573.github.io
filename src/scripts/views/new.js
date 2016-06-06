var newsTpl = require('../tpl/new.string');
SPA.defineView('new',{
	html:newsTpl,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist3=[];
			vm.isShowLoading = true;    //loading第一步
		}
	}],
	bindEvents:{
		'show':function(){
			var vm=this.getVM();
			$.ajax({
	        	// url: '/api/getlivelist.php',
	        	url:'hunlimao/mock/livelist.json',
		        success: function (res) {
		        	vm.livelist3=res.data.gp4;
		        }
		   	});
			 
			var myScroll = this.widgets.searchScroll;
			var head = $('.newFooter'),topImgHasClass = head.hasClass('up');
			var y,_y;
			var _height=$(".big").height();
			myScroll.on('scroll', function () {
				
				  y1=this.y;
		          y = Math.abs(this.y);
		          //console.log(y);
		          if (y <= _y) {
		              head.addClass('up');
		              return '';
		          }
		          if (y >= _y) {
		              head.removeClass('up');
		              return '';
		          }
//		          if(y < 600){
//		          	$(".big").height($(".big").height()+y1%1.5);
//		          }
		      });
		      myScroll.on('scrollEnd', function () {
		          _y = Math.abs(this.y);
		      });
		      myScroll.refresh();
		}
	},
	bindActions:{
		'newshide':function(){
			this.hide();
		},
		'downOpen':function(){
			SPA.open('down');
		}
	}
	
});