define(function(require, exports, module) {
	var notice = require('notice');
	//加载时间模块
  var date = require('data');
  exports.run = function() {
$("#openmusic").click(function(){
 // $('#LightBox').prepend('');
  $('#body').prepend('<div id="grid-gallery" class="grid-gallery">' +
      '<section class="grid-wrap">' +
      '<ul class="grid">' +
      '<li class="grid-sizer"></li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/me.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/11 喵小姐与黑片子饼干（番外篇）</h3><p>喵小姐近来连日欺负熊猫先生，熊猫先生表示需要对喵小姐进行一下辅导</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +




      '</ul>' +
      '</section>' +
      '' +
      '' +
      '<section class="slideshow">' +

      '<ul>' +



      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/11 喵小姐与黑片子饼干（番外篇）</h3>' +
      '<p>喵小姐近来连日欺负熊猫先生，熊猫先生表示需要对喵小姐进行一下辅导，正好喵小姐正在睡觉，熊猫先生实施自己计划的时候总算到来了，首先伸出自己的大舌头，是沾满口水的的大舌头，然后靠近了喵小姐，把喵小姐的尾巴用舌头舔了遍，只见喵小姐睡梦中浑身发抖，不一会，喵小姐的尾巴就变得湿淋淋的了，然后熊猫先生溜到了一号抽屉那里，打开了一号，然后把所有的东西都拿出来，挨个打开，铺放到床上，一个一个细细观赏，观赏过程中还进行了打分，最后收拾的过程中，把评分高的放在了上边。随后拿起了一根毛笔，取了一些水，蹲在喵小姐面前，用毛笔蘸水轻轻的刷喵小姐的脚心，一会左脚，一会右脚，一会两只脚一起刷，喵小姐在睡梦中发出求叫声，随后拿来一根小羽毛，轻轻的刷喵小姐的耳朵里面，一会左耳朵，一会右耳朵，一会两只一块刷，喵小姐发出浑身颤抖的声音，正在这时候，玉米蛇姐姐正好路过门口，喵小姐平时最怕蛇类了，熊猫先生把玉米蛇姐姐请了进来，让她缠绕着喵小姐大家一起合照了一下，还设置为了喵小姐的手机桌面呢，密码是5277呢，随后看见喵小姐揉着眼睛醒了过来，问熊猫先生在干什么，熊猫先生表示一直在睡觉，啥都没干。（哼！）</p>' +
      '</figcaption>' +
      '<img src="Images/me.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +


      '</ul>' +




      '<nav>' +
      '<span class="icon nav-prev"></span><span class="icon nav-next"></span><span class="icon nav-close"></span></nav></section></div> 	<script>new CBPGridGallery( document.getElementById( "grid-gallery" ));</script>');
  if($('#music').length!='0')
{
$('#LightBox').fadeIn(200);
//$("#music").fadeIn();
//$("#music").animate({opacity:"1"},300);

}
else
{
//$('#lock').prepend('<div id="music"><audio preload="auto" controls><source src="Flash/1.09.Smile Again-窪田ミナ.mp3" /></audio></div>');
//$('audio').audioPlayer();
$('#LightBox').fadeIn(200);
//$("#music").fadeIn();
//$("#music").animate({opacity:"1"},2000);


}


});
}
});