define(function(require, exports, module) {
	var notice = require('notice');
	//页面主操作界面控制
	//载入页面书页米快
	exports.loadSwichBooks = function() {
		marginTop2 = $(window).height() / 2 - 180;
		$('#lock').prepend('<div id="sb-container" class="sb-container" style="display:none;margin-top:' + marginTop2 + 'px"><div><span class="sb-icon icon-cog"></span><h4><span>All Settings</span></h4></div><div><span class="sb-icon icon-flight"></span><h4><span>User Modes</span></h4></div>	<div><span class="sb-icon icon-eye"></span><h4><span>Browse All</span></h4></div>	<div><span class="sb-icon icon-install"></span><h4><span>Install App</span></h4></div>	<div><span class="sb-icon icon-bag"></span><h4><span>Productivity</span></h4></div><div id="openvideo"><span class="sb-icon icon-globe"></span><h4><span>video</span></h4></div><div><span class="sb-icon icon-picture"></span><h4><span>User Images</span></h4></div><div id="openmusic"><span class="sb-icon icon-video"></span><h4><span>User Videos</span></h4></div><div><span class="sb-icon icon-download"></span><h4><span>Download App</span></h4></div>	<div><span class="sb-icon icon-mobile"></span><h4><span>Mobile Theme</span></h4></div><div><span class="sb-icon icon-camera"></span><h4><span>Digital App</span></h4></div><div><h4><span>Pisual</span></h4><span class="sb-toggle"></span><h5><span></span></h5></div></div>');
		$('#sb-container').swatchbook({
			// number of degrees that is between each item
			angleInc: 15,
			neighbor: 15,
			// if it should be closed by default
			initclosed: true,
			// index of the element that when clicked, triggers the open/close function
			// by default there is no such element
			closeIdx: 11
		});
		var music = require('music');
		music.run();
	}
});