define(function(require, exports, module) {
	var notice = require('notice');
	//登陆界面所需的校验函数及事件
	exports.lock = function() {
		$('#body').keydown(function(e) {
			if (e.ctrlKey && e.keyCode == 190) {
				if ($('#lock').css('display') == 'none') {
					notice.LodingNotice('red', 'Pisual Cells System Message', 'System Has Locked');
				} else {
					$("#lock").fadeOut();
					//$('#covervid-video').coverVid(1920, 100);
					//$("#covervid-wrapper").fadeIn(2000);
					var LoadingAnimationControl = require('LoadingAnimationControl');
					LoadingAnimationControl.lockform();
				}
			}
		});
	}
});