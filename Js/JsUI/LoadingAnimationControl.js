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
			notice.LodingNotice('green', '大肥喵系统', '系统正在登陆');
			notice.topNotice('blue', '报告大肥喵', '现在时间: ' + date.formdata("yyyy年MM月dd日 hh点mm分ss秒"));
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
		marginTopPic = $(window).height() / 2 - 70 + 100;
		marginTopSilde = $(window).height() / 2 + 107 + 100;
		marginTopSildebottom = $(window).height() / 2 + 380;
		marginTopUsername = $(window).height() / 2 + 150 + 100;
		$('#body').prepend('<div id="lockSystemLogoLock"><img src="././Images/pisual CELLS SYstembig.png" class="loginSystemLogo2" style="margin-top: ' + marginTopSystemLogo + 'px" /></div>');
		$('#body').prepend('<div id="LockNameAndPassword"><img src="Images/loginslide.png" class="loginPicslide" /><div id="LoginForm"><div class="txt-fld"><form id="formslock"><input id="" class="good_input" name="" type="text" placeholder="UserName"/><br><br><input id="password" class="good_input" name="password" type="password" placeholder="PassWord" /></form></div></div></div>');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginPic.png" class="loginPic" style="margin-top: ' + marginTopPic + 'px" />');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSilde + 'px" />');
		$('#LoginForm').css("margin-top", marginTopUsername + 'px');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSildebottom + 'px" />');
		$('#body').prepend('<div id="mainPlace" class="windows-top clearfix"><image class="MainLogo" src="Images/pisual CELLS System.png"></image><image class="topLogo" src="Images/PisualCells.png"></image><image class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#body').prepend('<div id="mainPlacebottom" class="windows-bottom clearfix"><img src="././Images/Orange Plant Company White.png" class="bottomLogo"/></div>');
		//登录界面逐渐显示出并且向上位移
		setTimeout('$(".loginSystemLogo2").fadeIn(2000)', 2000);
		setTimeout('$("#mainPlace").fadeIn(2000)', 1000);
		setTimeout('$("#mainPlacebottom").fadeIn(2000)', 1000);
		setTimeout('$("#LockNameAndPassword" ).fadeIn(2000)', 2000);
		var usernamePasswordValidate = require('usernamePasswordValidate');
		usernamePasswordValidate.unlock();
		$("#lock").fadeOut();
		$('#covervid-video').coverVid(1920, 100);
		$("#covervid-wrapper").fadeIn(2000);
		notice.LodingNotice('red', '大肥喵系统', '系统未登陆');
	}
	//页面加载锁定界面 包括用户名及密码
	exports.lockform = function() {
		marginTopSystemLogo = $(window).height() / 2 - 130;
		marginTopPic = $(window).height() / 2 - 70 + 100;
		marginTopSilde = $(window).height() / 2 + 107 + 100;
		marginTopSildebottom = $(window).height() / 2 + 380;
		marginTopUsername = $(window).height() / 2 + 150 + 100;
		$('#body').prepend('<div id="lockSystemLogoLock"><img src="././Images/pisual CELLS SYstembig.png" class="loginSystemLogo2" style="margin-top: ' + marginTopSystemLogo + 'px" /></div>');
		$('#body').prepend('<div id="LockNameAndPassword"><img src="Images/loginslide.png" class="loginPicslide" /><div id="LoginForm"><div class="txt-fld"><form id="formslock"><input id="" class="good_input" name="" type="text" placeholder="UserName"/><br><br><input id="password" class="good_input" name="password" type="password" placeholder="PassWord" /></form></div></div></div>');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginPic.png" class="loginPic" style="margin-top: ' + marginTopPic + 'px" />');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSilde + 'px" />');
		$('#LoginForm').css("margin-top", marginTopUsername + 'px');
		$('#LockNameAndPassword').prepend('<img src="././Images/loginslide.png" class="loginPicslide" style="margin-top: ' + marginTopSildebottom + 'px" />');
		$('#body').prepend('<div id="mainPlace" class="windows-top clearfix"><image class="MainLogo" src="Images/pisual CELLS System.png"></image><image class="topLogo" src="Images/PisualCells.png"></image><image class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#body').prepend('<div id="mainPlacebottom" class="windows-bottom clearfix"><img src="././Images/Orange Plant Company White.png" class="bottomLogo"/></div>');
		//登录界面逐渐显示出并且向上位移
		setTimeout('$(".loginSystemLogo2").fadeIn(2000)', 2000);
		setTimeout('$("#mainPlace").fadeIn(2000)', 1000);
		setTimeout('$("#mainPlacebottom").fadeIn(2000)', 1000);
		setTimeout('$("#LockNameAndPassword" ).fadeIn(2000)', 2000);
		var usernamePasswordValidate = require('usernamePasswordValidate');
		usernamePasswordValidate.unlock();
		notice.LodingNotice('red', '大肥喵系统', '系统未登陆');
	}
	//页面加载操作主页面
	exports.loadingMainPanel = function() {
		$('#lock').prepend('<div id="mainPlace" class="windows-top clearfix"><image class="MainLogo" src="Images/pisual CELLS System.png"></image><image class="topLogo" src="Images/PisualCells.png"></image><image class="LoginLogo" src="Images/cellscirse.png"></image></div>');
		$('#mainPlace').prepend('<div id="dropdown3d"></div>');
	}
	//加载成功后，登录界面跳出
	exports.loadingPanelOut = function() {
		notice.LodingNotice('green', '大肥喵系统', '登陆成功');
		setTimeout('$( "#LoginNameAndPassword" ).animate({opacity:"0","margin-bottom":"100px"},2000)', 7000);
	}
	//锁定界面跳出
	exports.unlockpanel = function() {
		notice.LodingNotice('green', '大肥喵系统', '解锁成功');
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