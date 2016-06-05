var homeTpl=require('../tpl/home.string');
SPA.defineView('home',{
	html:homeTpl,
	plugins:['delegated',{
		name:'avalon',
		options:function(vm){
			vm.livelist=[];
			vm.livelist1=[];
			vm.livelist2=[];
		}
	}],
	bindEvents:{
		'show':function(){
			var that = this;
			//iscroll
			var _indexScroll=this.widgets.indexScroll;
			_indexScroll.options.scrollX=true;
			_indexScroll.options.scrollY=false;
			//console.log(this.widgets.indexScroll);
			
			//数据
			var vm=this.getVM();
			 $.ajax({
	        	//url: '/api/getlivelist.php',
	        	url:'hunlimao/mock/livelist.json',
		        success: function (res) {
		        	vm.livelist=res.data.gp1;
		        	vm.livelist1=res.data.gp2;
		        	vm.livelist2=res.data.gp3;
		        	
					that.indexSwiper=new Swiper('#index-swiper',{
						direction: 'horizontal',
						loop:true,
						autoplayDisableOnInteraction : false,
						pagination: '#pagination1',
						autoplay : 3000,
					});
					that.indexSwiper2=new Swiper('#index-swiper2',{
						direction: 'horizontal',
					});
					that.indexSwiper3=new Swiper('#index-swiper3',{
						direction: 'horizontal',
					});
		        }
		    })
		},
		'beforeShow':function(){ 
		}
	},
	bindActions:{
		'newsblu':function(){
			SPA.open('new');
		}
	}

})
