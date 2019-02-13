define(function(require, exports, module) {
	exports.run = function() {
		//全局初始化载入，载入第一次使用时基本资源
		marginTop = $(window).height() / 2 - 140;//载入主logo位置
		marginTopWord = $(window).height() / 2 + 110;//载入主文字logo位置
		marginToploding = $(window).height() / 2 + 350;//载入主进度条位置
		$("#body").wrapInner('<div id="lock"></div>');
		$('#body').prepend('<div id="covervid-wrapper"><video id="covervid-video" muted autoplay loop ><source src="Video/homepage-slider-bg.mp4" type="video/mp4"></video></div>');
		$('#lock').prepend('<div id="LightBox"></div>');
		$('#lock').prepend('<div id="overlay" ></div><!--页面加载前效果模块 TEMM-->');
		$('#lock').prepend('<div id="overlayWord" ></div><!--页面加载前效果模块 TEMM-->');
		//$('#lock').prepend('<div id="Lodinganimation" class="pro-bar-container color-silver"></div><!--页面加载中进度条模块 TEMM-->');
		$('#overlay').prepend('<img id="loadingimg" src="././Images/PisualCells.png" alt="加载中logo" width="300" height="300" style="margin-top: ' + marginTop + 'px" />');
		//$('#Lodinganimation').css("margin-top", marginToploding + 'px');
		//$('#Lodinganimation').prepend('<div class="pro-bar bar-30 color-clouds" data-pro-bar-percent="100" data-pro-bar-delay="800"><div class="pro-bar-candy candy-ltr"></div></div>');
	   // $('#body').prepend('<embed src="././Flash/押尾コータロー - 桜・咲くころ.mp3" autostart="true" loop="true" hidden="true">');

		//首页加载退出机制
		var LoadingAnimationControl = require('LoadingAnimationControl');


		setTimeout(LoadingAnimationControl.loadingOut(),1000);
		setTimeout(LoadingAnimationControl.loadingform(),10000);
	}
});