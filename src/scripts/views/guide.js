//引入模板
var tplGuide=require('../tpl/guide.string');
var sw = require('../lib/swiper.animate1.0.2.min.js');
var swiperAnimateCache=sw.a;
var swiperAnimate=sw.b;
//定义一个视图,第一个参数：视图的名字，第二个参数：对象。
SPA.defineView('guide',{
	html:tplGuide,    //载入的文件
	plugins:['delegated'],   //事件代理,添加插件
	bindActions:{     //给元素绑定事件
		'goto.index':function(){
			SPA.open('index'); //打开index.html
			//SPA.util.storage('isVisited',true)
		}
	},
	//视图的事件绑定
	bindEvents:{
		'beforeShow':function(){
			//console.log(Swiper)
			var guideSwiper = new Swiper('#guide-swiper',{
				direction: 'horizontal',
				effect : 'fade',
				pagination: '.swiper-pagination',
				onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			  		swiperAnimateCache(swiper); //隐藏动画元素 
			   		swiperAnimate(swiper); //初始化完成开始动画
				 }, 
				onSlideChangeEnd: function(swiper){ 
			   		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				} 
			})
		}
	}
})

//swiper
//window.onload=function(){
//	 var mySwiper = new Swiper ('.swiper-container', {
//		    direction: 'horizontal', //Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)
//		    // 如果需要分页器
//		    pagination: '.swiper-pagination',
//		    effect : 'fade',
////			onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
////			   swiperAnimateCache(swiper); //隐藏动画元素 
////			   swiperAnimate(swiper); //初始化完成开始动画
////			 }, 
////			onSlideChangeEnd: function(swiper){ 
////			   swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
////			} 
//		  })
//}
//
//     
