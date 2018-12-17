define(function(require, exports, module) {
	exports.run = function() {
		$('.pro-bar').each(function(i, elem) {
			var $elem = $(this),
			percent = $elem.attr('data-pro-bar-percent'),
			delay = $elem.attr('data-pro-bar-delay');
			if (!$elem.hasClass('animated')) $elem.css({
				'width': '0%'
			});
			$(elem).appear(function() {
				$elem.animate({
					'width': percent + '%'
				},
				3000, 'easeInOutExpo').addClass('animated');
				lodingover = new Object(); //创建一个定时循环返回变量
				var clocktimeloding;
				lodingover.interval = function() {
					if ($elem.css('width') == '500px') {
						clearInterval(clocktimeloding);
						//首页加载退出机制
						var LoadingAnimationControl = require('LoadingAnimationControl');
						LoadingAnimationControl.loadingOut();
						LoadingAnimationControl.loadingform();
					}
				}
				clocktimeloding = setInterval(lodingover.interval, 3000);
			});
		});
	}
});