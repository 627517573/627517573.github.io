var indexTpl = require('../tpl/index.string');
//var IScroll = require('../lib/iscroll-probe.js');//spa中包含iscroll框架了
SPA.defineView('index', {
	html: indexTpl,
	
	plugins:['delegated'],   //事件代理,添加插件
		
	modules:[{            //子视图的嵌套定义
		// 名称
        name: 'content',
        // 渲染的位置
        container: '.m-container',
        // 视图数组
        views: ['home','search','wedding','tool','my'],
        //第一次进入的视图
        defaultTag:'home'
	}],
	
	
	init:{
		indexSwiper:null
	},
	
	
	bindActions:{     //给元素绑定事件
		'switch.move':function(e){
			console.log(e);
			$(e.el).addClass('active').siblings().removeClass('active');
			//console.log(1)
			this.modules.content.launch(e.data.tag);//launch()为加载，里面写加载的视图的名字
			
		}
		//后面还可以写多个
	}
	
})

	 


