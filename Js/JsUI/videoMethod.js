define(function(require, exports, module) {
	var notice = require('notice');
	//加载时间模块
	exports.run = function() {
		$("#openvideo").click(function() {
			if ($('#videotop').length != '0') {
				$('#LightBox').fadeIn(200);
				$("#videotop").fadeIn();
				$("#videotop").animate({
					opacity: "1"
				},
				800);
			} else {
				$('#lock').prepend('<div id="videotop"><video id="MY_VIDEO_1" class="video-js vjs-default-skin" controls preload="auto" width="1280" height="720" poster="Images/ed.mp4_20141006_015432.515.jpg"data-setup="{}"><source src="Video/ed.mp4" type="video/mp4"></video></div>');
				$('#LightBox').fadeIn(200);
				$("#videotop").fadeIn();
				$("#videotop").animate({
					opacity: "1"
				},
				00);
			}
		});
	}
});