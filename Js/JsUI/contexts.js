define(function(require, exports, module) {
	var notice = require('notice');
	//加载时间模块
	var date = require('data');
	exports.run = function() {
		context.init({
			fadeSpeed: 100,
			filter: function($obj) {},
			above: 'auto',
			preventDoubleContext: true,
			compress: false
		});
		context.settings({
			compress: false
		});

		context.attach('html', [{
			header: 'Pisual Cells System Menu'
		},
		{
			text: 'System Time',
			action: function(e) {
				notice.topNotice('blue', 'Pisual Cells System Message', '现在时间: ' + date.formdata("yyyy年MM月dd日 hh点mm分ss秒"));
			}
		},
		{
			text: 'Reload',
			href: '#'
		},
		{
			text: 'Light Theme',
			href: '#'
		},
		{
			text: 'dark Theme',
			href: '#'
		},
		{
			divider: true
		},
		{
			header: 'Pisual Cells System Account'
		},
		{
			text: 'Login IN',
			href: '#'
		},
		{
			text: 'Login Lock',
			href: '#'
		},
		{
			text: 'Account Control',
			href: '#'
		},
		{
			text: 'Login Out',
			href: '#'
		},
		{
			divider: true
		},
		{
			header: 'Pisual Cells System News'
		},
		{
			text: 'Open Pisual News',
			action: function(e) {
				$('#LightBox').fadeIn(700);
				$('#swdrop').fadeIn(700);
				setTimeout('$("#cd-dropdown" ).dropdown( {gutter : 10,stack : true,delay : 100,slidingIn : 100} )', 10);
			}
		},
		{
			text: 'Close Pisual News',
			action: function(e) {
				$('#LightBox').fadeOut(200);
				$('#swdrop').fadeOut(200);
			}
		},
		{
			text: 'Disable This Menu',
			action: function(e) {
				e.preventDefault();
				context.destroy('html');
				alert('html contextual menu destroyed!');
			}
		},
		{
			text: 'Help',
			action: function(e) {
				alert("help");
			}
		}]);
	}
});