define(function(require, exports, module) {
	exports.run = function() {
		//加载页面前期效果
		var loadinglogo = require('loading');
		loadinglogo.run();
		//加载页面前期旋转效果
		var loadinglogoroute = require('rotate');
		loadinglogoroute.run();
		//页面全部加载完成后控制进度条
		var probars = require('probars');
		probars.run();
		//页面资源全部加载完成后 启动页面
		var LoadingAnimationControl = require('LoadingAnimationControl');
		LoadingAnimationControl.loadingOver();
		//启动右键菜单
		var contexts = require('contexts');
		contexts.run();
		//启动键盘案件监控
		var keyMethod = require('keyMethod');
		keyMethod.lock();
	}
});