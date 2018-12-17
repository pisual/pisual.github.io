	define(function(require, exports, module) {
	exports.run = function() {
			$('.pro-bar').each(function(i, elem) {
			var	$elem = $(this),
				percent = $elem.attr('data-pro-bar-percent'),
				delay = $elem.attr('data-pro-bar-delay');
			if (!$elem.hasClass('animated'))
				$elem.css({ 'width' : '0%' });
			$(elem).appear(function () {
			$elem.animate({ 'width' : percent + '%' }, 3000, 'easeInOutExpo').addClass('animated');
			lodingover=new Object();//创建一个新的对象 
			var clocktimeloding;
      lodingover.interval=function(){
      		if($elem.css('width')=='500px')
			 		{clearInterval(clocktimeloding);
			 		 $("#Lodinganimation").fadeOut(1000);
			 		 setTimeout('$("#Lodinganimation").remove()',2000);
			 		 var delayspeed = 500;
			 		 setTimeout('$("#overlay").delay(0).fadeOut(2000)',3000);
			 		 setTimeout('$("#overlayWord").delay(0).fadeOut(2000)',3000);
			 		 }}
			clocktimeloding = setInterval(lodingover.interval,3000);
			});
		});
	}
});