define(function(require, exports, module) {
	exports.LodingNotice = function(color, titlename, contents) {
		//color red green blue yellow
		var colorsN3 = [color];
		var titlesN3 = [titlename];
		var contentsN3 = [contents];
		new jBox('Notice', {
			attributes: {
				x: 'left',
				y: 'bottom'
			},
			theme: 'NoticeBorder',
			color: 'white',
			audio: '././audio/blop',
			volume: 50,
			animation: {
				open: 'slide:bottom',
				close: 'slide:left'
			},
			onInit: function() {
				this.options.color = color;
				this.options.title = titlename;
				this.options.content = contents;
			},
		})
	}

	exports.topNotice = function(color, titlename, contents) {
		//color red green blue yellow
		var colorsN3 = [color];
		var titlesN3 = [titlename];
		var contentsN3 = [contents];
		new jBox('Notice', {
			attributes: {
				x: 'right',
				y: 'top'
			},
			theme: 'NoticeBorder',
			color: 'white',
			audio: '././Audio/blop',
			volume: 50,
			animation: {
				open: 'slide:top',
				close: 'slide:right'
			},
			onInit: function() {
				this.options.color = color;
				this.options.title = titlename;
				this.options.content = contents;
			},
		})
	}
});