require('./lib/swiper.min.js');
require('./lib/spa.min.js');
require('./views/guide.js');
require('./views/index.js');
require('./views/search.js');
require('./views/home.js');
require('./views/wedding.js');
require('./views/tool.js');
require('./views/my.js');
//配置视图的信息-测试版的代码，不判断是否第一次进入app
SPA.config({
	indexView:'guide'  //第一个打开的视图
});

//判断是否第一次进入app
//var _indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
//SPA.config({
//	indexView:_indexView  //第一个打开的视图
//});








