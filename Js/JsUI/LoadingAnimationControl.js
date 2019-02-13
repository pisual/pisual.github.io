define(function(require, exports, module) {
	var notice = require('notice');
	//页面全部资源载入完毕后显示的内容
	exports.loadingOver = function() {
		$(window).load(function() {
			$('#body').fadeIn();
			$('#overlay').fadeIn('1000');
			$('#overlayWord').fadeIn('1000');
			setTimeout('$("#Lodinganimation").fadeIn()', 2000);
			//加载时间模块
			var date = require('data');
			//加载页面完成通知栏
			var notice = require('notice');
			notice.LodingNotice('green', '大美喵日记', '日记正在打开');
			notice.topNotice('blue', '小略子报告', '现在时间: ' + date.formdata("yyyy年MM月dd日 hh点mm分ss秒"));
		});
	}
	//页面加载完成后退出机制
	exports.loadingOut = function() {
		$("#Lodinganimation").fadeOut(1000);
		setTimeout('$("#Lodinganimation").remove()', 2000);
		setTimeout('$("#overlay").delay(0).fadeOut(2000)', 3000);
		setTimeout('$("#overlayWord").delay(0).fadeOut(2000)', 3000);
		setTimeout('$("#overlay").remove()', 7000);
		setTimeout('$("#overlayWord").remove()', 7000);
	}
	//页面加载登录界面 包括用户名及密码
	exports.loadingform = function() {
		marginTopSystemLogo = $(window).height() / 2 - 130;
		marginTopPic = $(window).height() / 2 - 70 + 130;
		marginTopSilde = $(window).height() / 2 + 107 + 100;
		marginTopUsername = $(window).height() / 2 + 150 + 100;
		$('#body').prepend('<div id="loginSystemLogoLogining"></div>');
		$('#lock').prepend('<div id="LoginNameAndPassword"><img src="Images/loginslide.png" class="loginPicslide" /><div id="LoginForm"><div class="txt-fld"><form id="forms"><input id="username" class="good_input" name="" type="text" placeholder="喵名字"/><br><br><input id="password" class="good_input" name="password" type="password" placeholder="喵爪印子" /></form></div></div></div>');
		$('#LoginNameAndPassword').prepend('<img src="././Images/loginPic.png" class="loginPic" style="margin-top: ' + marginTopPic + 'px" />');
		$('#LoginNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSilde + 'px" />');
		$('#LoginForm').css("margin-top", marginTopUsername + 'px');
		$('#lock').prepend('<div id="mainPlace" class="windows-top clearfix"></image><image class="topLogo" src="Images/PisualCells.png"></image><image id ="lockPress" class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#lock').prepend('<div id="mainPlacebottom" class="windows-bottom clearfix"></div>');
		//登录界面逐渐显示出并且向上位移
		setTimeout('$("#mainPlace").fadeIn(2000)', 7000);
		setTimeout('$("#mainPlacebottom").fadeIn(2000)', 7000);
		setTimeout('$("#loginSystemLogoLogining").fadeIn(2000)', 7000);
		$("#LoginNameAndPassword").fadeIn();
		setTimeout('$( "#LoginNameAndPassword" ).animate({opacity:"1","margin-bottom":"-100px"},2000)', 7000);
		setTimeout('$("#LightBox").fadeIn(2000)', 8800);
		var usernamePasswordValidate = require('usernamePasswordValidate');
		usernamePasswordValidate.keydowns();
		notice.LodingNotice('red', '喵小姐日记', '日记需要密码');
	}
//页面加载锁定界面 包括用户名及密码
	exports.lockform = function() {
		marginTopSystemLogo = $(window).height() / 2 - 130;
		marginTopPic = $(window).height() / 2 - 70 + 100;
		marginTopSilde = $(window).height() / 2 + 107 + 100;
		marginTopSildebottom = $(window).height() / 2 + 380;
		marginTopUsername = $(window).height() / 2 + 150 + 100;
		$('#body').prepend('<div id="lockSystemLogoLock"></div>');
		$('#body').prepend('<div id="LockNameAndPassword"><img src="Images/loginslide.png" class="loginPicslide" /><div id="LoginForm"><div class="txt-fld"><form id="formslock"><input id="usernames" class="good_input" name="usernames" type="text" placeholder="喵名字"/><br><br><input id="passwords" class="good_input" name="passwords" type="password" placeholder="喵爪子" /></form></div></div></div>');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginPic.png" class="loginPic" style="margin-top: ' + marginTopPic + 'px" />');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSilde + 'px" />');
		$('#LoginForm').css("margin-top", marginTopUsername + 'px');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSildebottom + 'px" />');
		$('#body').prepend('<div id="mainPlace" class="windows-top clearfix"><image class="topLogo" src="Images/PisualCells.png"></image><image class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#body').prepend('<div id="mainPlacebottom" class="windows-bottom clearfix"></div>');
		//登录界面逐渐显示出并且向上位移
		setTimeout('$(".loginSystemLogo2").fadeIn(2000)', 2000);
		setTimeout('$("#mainPlace").fadeIn(2000)', 1000);
		setTimeout('$("#mainPlacebottom").fadeIn(2000)', 1000);
		setTimeout('$("#LockNameAndPassword" ).fadeIn(2000)', 2000);
		var usernamePasswordValidate = require('usernamePasswordValidate');
		usernamePasswordValidate.unlock();
		notice.LodingNotice('red', '喵小姐日记', '日记需要密码');
	}
	//页面加载操作主页面
	exports.loadingMainPanel = function() {
		$('#lock').prepend('<div id="mainPlace" class="windows-top clearfix"><image class="MainLogo" src="Images/pisual CELLS System.png"></image><image class="topLogo" src="Images/PisualCells.png"></image><image class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#mainPlace').prepend('<div id="dropdown3d"></div>');
	}
	//加载成功后，登录界面跳出
	exports.loadingPanelOut = function() {
		setTimeout('$( "#LoginNameAndPassword" ).animate({opacity:"0","margin-bottom":"100px"},2000)', 7000);
	}
	//锁定界面跳出
	exports.unlockpanel = function() {
		notice.LodingNotice('red', '喵小姐日记', '日记已经解锁');
		$("#covervid-wrapper").fadeOut(1000);
		$(".loginSystemLogo2").fadeOut(2000);
		$("#mainPlace").fadeOut(2000);
		$("#mainPlacebottom").fadeOut(2000);
		$("#LockNameAndPassword").fadeOut(2000);
		setTimeout('$("#lockSystemLogoLock").remove()', 2000);
		setTimeout('$("#LockNameAndPassword").remove()', 2000);
		setTimeout('$("#mainPlace").remove()', 2000);
		setTimeout('$("#mainPlacebottom").remove()', 2000);
		setTimeout('$("#lock").fadeIn(3000)', 3000);
	}
});