define(function(require, exports, module) {
	exports.run = function() {
		var img = $('#loadingimg');
		function rotate() {
			img.animate({
				rotate: '360'
			},
			5000, 'linear',
			function() {
				rotate();
			});
		}
		rotate();
	}
});