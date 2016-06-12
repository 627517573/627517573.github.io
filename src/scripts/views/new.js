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
	        	url:'hunlimao/mock/livelist2.json',
	        	data: {
		          id: that.param.id
		        },
		        success: function (res) {
		        	window.onload=function(){
		        		myScroll.refresh();
		        	}
		        	if(that.param.id==1){
		        		vm.detail=res.data.classify[0].gn1;
		        		vm.detail1=res.data.classify[0].gn2;
		        	}else if(that.param.id==2){
		        		vm.detail=res.data.classify[1].gn1;
		        		vm.detail1=res.data.classify[1].gn2;
		        	}else if(that.param.id==3){
		        		vm.detail=res.data.classify[2].gn1;
		        		vm.detail1=res.data.classify[2].gn2;
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