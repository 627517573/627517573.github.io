var newsTpl = require('../tpl/new.string');

SPA.defineView('new',{
	html:newsTpl,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.detail=[];
			vm.detail1=[];
		}
	}],
	bindEvents:{
		'show':function(){
			var vm=this.getVM();
			var that = this;
			$.ajax({
	        	url:'hunlimao/mock/detail.json',
	        	//url: '/api/getDetail.php',
	        	data: {
		          id: that.param.id
		        },
		        success: function (res) {
		        	console.log(res);
		        	vm.detail = res.data.gn1;
		        	vm.detail1 = res.data.gn2;
		        	window.onload=function(){
		        		myScroll.refresh();
		        	}
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
		          myScroll.refresh();
		      });
		      
		},
		'read':function(){
			setTimeout(function(){
				this.widgets.scrollNew1.refresh();
			},3000);
			
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