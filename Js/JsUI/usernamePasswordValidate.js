define(function(require, exports, module) {
	var notice = require('notice');
	//登陆界面所需的校验函数及事件
	exports.keydowns = function() {
		$('#forms').keydown(function(e) {
			if (e.keyCode == 13) {
				notice.LodingNotice('yellow', 'Pisual Cells System Message', 'Connecting Pisual Services...');
				notice.LodingNotice('green', 'Pisual Cells System Message', 'Login Success');
				$("#LightBox").fadeOut(800);
				setTimeout('$( "#LoginNameAndPassword" ).fadeOut(1000)', 700);
				setTimeout('$( "#loginSystemLogoLogining" ).fadeOut(1000)', 700);
				var mainPanelAnimation = require('mainPanelAnimation');
				mainPanelAnimation.loadSwichBooks();
				var swordMenu = require('swordMenu');
				swordMenu.run();
				var video = require('video');
				video.run();
				var clock = require('clock');
				clock.run();
				setTimeout('$(".sb-container").fadeIn(1500)', 2000);
				setTimeout('$("#loginSystemLogoLogining").remove()', 7000);
				setTimeout('$("#LoginNameAndPassword").remove()', 7000);
			}
		});
	}
	//锁定界面回车解锁
	exports.unlock = function() {
		$('#formslock').keydown(function(e) {
			if (e.keyCode == 13) {
				notice.LodingNotice('green', 'Pisual Cells System Message', 'UnLock Success');
				$("#covervid-wrapper").fadeOut(1000);
				$(".loginSystemLogo2").fadeOut(2000);
				$("#mainPlace").fadeOut(2000);
				$("#mainPlacebottom").fadeOut(2000);
				$("#LockNameAndPassword").fadeOut(2000);
				notice.LodingNotice('green', 'Pisual Cells System Message', 'Load lock before operation interface');
				setTimeout('$("#lockSystemLogoLock").remove()', 2000);
				setTimeout('$("#LockNameAndPassword").remove()', 2000);
				setTimeout('$("#mainPlace").remove()', 2000);
				setTimeout('$("#mainPlacebottom").remove()', 2000);
				setTimeout('$("#lock").fadeIn(3000)', 2010);
			}
		})
	}
});