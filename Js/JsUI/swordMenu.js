define(function(require, exports, module) {
	exports.run = function() {
		marginTop = $(window).height() / 2;
		//�����»�ʽ����ģ��
		$('#lock').prepend('<div id="swdrop" style="margin-top:' + marginTop + 'px"><select id="cd-dropdown" class="cd-select"><option value="-1" selected>Choose your prize</option><option value="1" class="icon-camera">Camera</option><option value="2" class="icon-diamond">Diamonds</option><option value="3" class="icon-rocket">Spaceship</option><option value="4" class="icon-star">Star</option><option value="5" class="icon-clock">Time</option><option value="6" class="icon-apple">Time</option><option value="7" class="icon-android">Time</option><option value="8" class="icon-windows">Time</option><option value="9" class="icon-sun">Time</option><option value="10" class="icon-cloudy">Time</option></select></div>');

			$("#LightBox").click(function() {
			$('#LightBox').fadeOut(200);
			if ($('#swdrop').length != '0') {
				$('#swdrop').fadeOut(200);
			}
			if ($('#videotop').length != '0') {
				$('#videotop').fadeOut(400);
			}
			if ($('#grid-gallery').length != '0') {
				$('#grid-gallery').fadeOut(400);
			}

			if ($("#music").length != '0') {
				$("#music").animate({
					opacity: "0"
				},
				500);
				setTimeout('$("#music").fadeOut()', 600);
			}
		});
	}
});