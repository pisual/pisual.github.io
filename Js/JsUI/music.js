define(function(require, exports, module) {
	var notice = require('notice');
	//加载时间模块
  var date = require('data');
  exports.run = function() {
$("#openmusic").click(function(){
if($('#music').length!='0')
{
$('#LightBox').fadeIn(200);
$("#music").fadeIn();
$("#music").animate({opacity:"1"},300);
}
else
{
$('#lock').prepend('<div id="music"><audio preload="auto" controls><source src="Flash/1.09.Smile Again-窪田ミナ.mp3" /></audio></div>');
$('audio').audioPlayer();
$('#LightBox').fadeIn(200);
$("#music").fadeIn();
$("#music").animate({opacity:"1"},2000);
}
});
}
});