var searchTpl=require('../tpl/search.string');
SPA.defineView('search',{
	html:searchTpl,
	plugins: ['delegated'],
	init: {
	    searchSwiper: null
	},
	bindActions: {
	    'search.swiper': function (e) {
	    	$(e.el).addClass('active-search').siblings().removeClass('active-search');
	        this.wrapSwiper.slideTo($(e.el).index());
	    }
	},
	bindEvents:{
		'show':function(){
			var that=this;
				this.searchSwiper=new Swiper('#search-swiper',{
					direction: 'horizontal',
					loop:true,
					autoplayDisableOnInteraction : false,
					pagination: '#pagination-search',
					autoplay : 3000,
				});
				this.wrapSwiper=new Swiper('#wrap-swiper',{
					direction: 'horizontal',
					onSlideChangeStart: function (swiper) {
				        $('#index-nav li').eq(swiper.activeIndex).addClass('active-search').siblings().removeClass('active-search');
				        var pScrollTop = that.widgets.indexScroll;
	    				pScrollTop.scrollTo(0, 0, 0, IScroll.utils.ease.quadratic);
				   }
				});
			}
	}
})
