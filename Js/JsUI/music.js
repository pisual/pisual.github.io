﻿define(function(require, exports, module) {
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
      '<img src="Images/a3.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/12 喵小姐与体检</h3><p>喵小姐平日里非常害怕体检，每年到体检的时候，都会紧张一晚上</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/me.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/11 喵小姐与黑片子饼干（番外篇）</h3><p>喵小姐近来连日欺负熊猫先生，熊猫先生表示需要对喵小姐进行一下辅导</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/10 喵小姐与黑片子饼干（中-Part3）</h3><p>喵小姐吃着蒸饺的过程中，困的不行了，一到头躺在沙发上睡了过去</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a2.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/9 喵小姐与黑片子饼干（中-Part2）</h3><p>小略子被喵小姐从家里赶出来之后，一路上都没有吃东西，饿的已经三条腿发抖</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/9 喵小姐与黑片子饼干（中）</h3><p>烘焙需要的材料相当多，喵小姐和熊猫先哼都是新手，也不知道买啥，喵小姐没事就上图书馆学习烘培知识</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a4.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/8 喵小姐与黑片子饼干（上）</h3><p>喵小姐非常喜欢甜食，久而久之，便诞生了自己做的想法，与熊猫先哼商量后，两人决定自己做甜食</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a5.jpg" alt="img01"/>' +
      '<figcaption>' +
      '<h3>2018/2/7 喵小姐与嘟嘟嘴</h3><p>喵小姐最近傲娇的很，经常嘟嘟嘴，让熊猫先生误会以为是想要亲亲，结果偷偷亲亲上去，又遭受到喵小姐的一顿恶咬</p>' +
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
      '<h3>2018/2/12 喵小姐与体检</h3>' +
      '<p>喵小姐平日里非常害怕体检，每年到体检的时候，都会紧张一晚上，这不，头一晚上，紧紧的咬住熊猫先生的掌握不松口，咬的都快掉了，熊猫先生一狠心把喵小姐拽下来，喵小姐这才安心下来，虽然会损失一个掌握。喵小姐主要是对于憋尿非常恐惧，起大早那熊猫先生的顿顿顿水杯狠狠的喝下2杯子，不一会，就要爆炸了，赶快冲向护士站。玉米蛇护士拿起黏糊糊的膏药涂在肚子憋的的鼓鼓的喵小姐的肚皮上狠狠的挤压，不断蹂躏，熊猫先生也顺便摸了几下，喵小姐感觉马上就要嘘嘘了，非常痛苦的不断打着熊猫先生的掌握，熊猫先生安慰者喵小姐马上就完事啦，并发出嘘嘘的声音安慰着喵小姐。不一会，玉米蛇护士姐姐检查完毕啦，熊猫先生看着自己残缺的掌握，伤心的发出嘘嘘嘘嘘的声音。剩下的比较害怕的项目时检查尾巴，喵小姐的尾巴非常敏感，别人一碰就会浑身发抖，谁让平日里熊猫先生经常用沾满口水的大舌头按摩喵尾巴，但是一到检查的环节，还是紧张的不得了，熊猫先生把喵小姐紧紧扒住，让密集青蛙🐸先生好好检查尾巴，喵小姐在检查的过程中，发出奇怪的打嗝的声音，大家表示非常奇怪。（体检注意安全，预约好我陪喵子去）</p>' +
      '</figcaption>' +
      '<img src="Images/a5.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +


      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/11 喵小姐与黑片子饼干（番外篇）</h3>' +
      '<p>喵小姐近来连日欺负熊猫先生，熊猫先生表示需要对喵小姐进行一下辅导，正好喵小姐正在睡觉，熊猫先生实施自己计划的时候总算到来了，首先伸出自己的大舌头，是沾满口水的的大舌头，然后靠近了喵小姐，把喵小姐的尾巴用舌头舔了遍，只见喵小姐睡梦中浑身发抖，不一会，喵小姐的尾巴就变得湿淋淋的了，然后熊猫先生溜到了一号抽屉那里，打开了一号，然后把所有的东西都拿出来，挨个打开，铺放到床上，一个一个细细观赏，观赏过程中还进行了打分，最后收拾的过程中，把评分高的放在了上边。随后拿起了一根毛笔，取了一些水，蹲在喵小姐面前，用毛笔蘸水轻轻的刷喵小姐的脚心，一会左脚，一会右脚，一会两只脚一起刷，喵小姐在睡梦中发出求叫声，随后拿来一根小羽毛，轻轻的刷喵小姐的耳朵里面，一会左耳朵，一会右耳朵，一会两只一块刷，喵小姐发出浑身颤抖的声音，正在这时候，玉米蛇姐姐正好路过门口，喵小姐平时最怕蛇类了，熊猫先生把玉米蛇姐姐请了进来，让她缠绕着喵小姐大家一起合照了一下，还设置为了喵小姐的手机桌面呢，密码是5277呢，随后看见喵小姐揉着眼睛醒了过来，问熊猫先生在干什么，熊猫先生表示一直在睡觉，啥都没干。（哼！）</p>' +
      '</figcaption>' +
      '<img src="Images/me.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/10 喵小姐与黑片子饼干（中-Part3）</h3>' +
      '<p>喵小姐吃着蒸饺的过程中，困的不行了，一到头躺在沙发上睡了过去，小被子都没盖上，嘴里还叼着半个蒸饺子，肚子发出了吃饱了的咕噜咕噜的声音。熊猫先生经过长途跋涉，终于到了喵小姐家里，敲了半天门，还是没有回应，熊猫先生只好拿出备用钥匙，这把备用钥匙本来是喵小姐的，熊猫先生有一天正大光明翻一号抽屉翻出来的，便留下备用了，打开大门，熊猫先生把货物搬进屋里，还是没有看见喵小姐，只闻的一屋子蒸饺子味道，顺着味道走过去，发现喵小姐嘴里叼着半个蒸饺睡着了，熊猫先生走过去，拿起这半个蒸饺子，自己吃掉了，顺便给喵小姐把肚皮盖上了，还顺便让喵小姐在耳朵吹气券上按了爪子印。喵小姐的货有些需要放在冰箱里，熊猫先生打开后清点了一下，把需要冷冻的放到喵箱子里，把喵箱子塞的满满的，回头一看，喵小姐还在睡觉，便偷偷又溜进1号抽屉，偷偷翻了起来，看看能不能翻出来有用的东西。（明天虽然要上班，但是要高高兴兴的哦）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/9 喵小姐与黑片子饼干（中-Part2）</h3>' +
      '<p>小略子被喵小姐从家里赶出来之后，一路上都没有吃东西，饿的已经三条腿发抖，下略子对于吃的东西比较挑剔，平日里只吃豆瓣酱炒过的东西，喵小姐此时正在家里看着电视，吃着蒸饺子沾豆瓣酱，熊猫先哼想起来就想咬人，' +
      '在开车的过程中，正好路过一片小河，河边的青草绿幽幽的，绿的让生活感觉过的去了，熊猫先哼便让小略子休息一会，去吃些大麦若叶青草，小略子并不喜欢吃草，但是饿的实在是不行了，想到喵小姐在家懒洋洋的吃着蒸饺子，' +
      '恶狠狠的咬起了草，不一会，就在草地上咬出了一个馋喵子三个字，草地上还有一些野生浆果，熊猫先哼便摘下来准备给喵</p>' +
      '</figcaption>' +
      '<img src="Images/a2.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/9 喵小姐与黑片子饼干（中）</h3>' +
      '<p>烘焙需要的材料相当多，喵小姐和熊猫先哼都是新手，也不知道买啥，喵小姐没事就上图书馆学习烘培知识，还经常去村口铁子乔治烘焙店学习人家的手艺，看人家用什么材料和工具，经过一段时间的品尝，不对是经过一段时间的学习，终于掌握了烘培需要的工具和材料，随后，去村口王师傅那里订购了所需要的工具和材料，材料非常多，王师傅表示要很久才到来，等待时间，喵小姐每天都拉着熊猫先哼去看邮递进度，这不，今天还是没到，喵小姐非常失望，就失望的狠狠咬了熊猫先哼一口，熊猫先哼嘴里叼着烤面筋，表示非常无辜。这一天，熊猫先哼正在家里种地，突然，远处一阵狂风袭来，到了身边一看，结果是喵小姐家的小略子，小略子满身是汗，嘴里咬着一张纸条，上面是喵小姐写的快去取快递，货到了，熊猫先哼立马坐上小略子，小略子痛苦的嚎叫一下，脚底陷入土中，熊猫先哼喊了一句“佩佩佩佩”，俩人便一块冲向村口王师傅。取上了货，已经是下午了，熊猫先哼饿的肚子呱呱叫，便看周围有没有可以吃放的店，结果发现只有一家新开的苗条子店，便进里面吃了一碗喵条子，饱了之后，坐上还在嚎叫的小略子，一块奔向喵小姐家。</p>' +
      '</figcaption>' +
      '<img src="Images/a3.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/8 喵小姐与黑片子饼干（上）</h3>' +
      '<p>喵小姐非常喜欢甜食，久而久之，便诞生了自己做的想法，与熊猫先哼商量后，两人决定自己做甜食，做烘焙的第一步，是要有一部烤箱子，喵小姐随即在村口王师傅家订购了烤箱与烘焙用品，都说烘焙是一个大坑，这不，喵小姐的第一个烘焙用品大箱子已经运来了。还有好几大箱子用品在随后的路上呢。听闻烤箱子运来，喵小姐与熊猫先哼大中午的急急忙忙的开着小略车来到村口王师傅那里，王师傅是村里的快递店，大中午的王师傅正在睡觉，熊猫先哼实在是急的不行了，就拿起王师傅家的汪放在了王师傅的脸上，不一会，王师傅就憋醒了过来。王师傅在仓库里一顿翻，找到了喵小姐的快递，大家一起把烤箱搬到小略车上边，俩人便踏上了返程的路，一路上，喵小姐就怕烤箱子碰坏喽。一只扶着烤箱子，等到地方，已经累的毛都趴下去了，到了喵小姐门口后，熊猫先哼绑好小略车，准备拿起烤箱子搬进屋子里，结果，烤箱子没有准备扶手，手一打滑，差点把烤箱子扔出去，吓得赶快用头顶起来，喵小姐还蹲在烤箱子上面监工，难度顿时增加了不少。俩人晃晃悠悠的把烤箱子搬进了厨房，结果厨房已经没有放大件物品的地方，俩人在喵小姐的家里四处寻找合适的地方，最后，发现喵小姐的大衣柜很合适，里面空间很大，便把烤箱子安排在了衣柜里面。安顺好之后，俩人长出了一口气，就等材料到了，就可以做饼干了。（黑板子好吃！）</p>' +
      '</figcaption>' +
      '<img src="Images/a4.jpg" alt="img01"/>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/7 喵小姐与嘟嘟嘴</h3>' +
      '<p>喵小姐最近傲娇的很，经常嘟嘟嘴，让熊猫先生误会以为是想要亲亲，结果偷偷亲亲上去，又遭受到喵小姐的一顿恶咬，咬的浑身都是牙印，熊猫先生非常疑惑，不对呀，这明明就是像亲亲了啊，但是看见嘟嘟嘴，还是忍不住亲上去，结果今天的掌握被咬掉了一，现在还漏风呢。这不，昨天熊猫先生对待喵小姐有些怠慢了，没有粘着喵小姐，结果晚上，喵小姐终于忍不薯了，怒气冲冲的开着小略车前来，顿顿顿的敲着大门，半天看没人来，怒火更上一档。拿出备用钥匙。打开大门，冲进卧室，看见正在床上打滚的的熊猫先生，一口咬住熊猫先生喵喵叫，“说，你是不是有别的喵了！”，熊猫先生难得有一个睡懒觉的机会，正在床上睡的云里雾里，突然感觉掌握有些凉，一摸，结果摸到了一只喵。吓得一下子惊醒过来，迷迷糊糊的看着喵小姐，看见喵小姐正嘟嘟嘴，顺便亲上去，结果，又被咬了一口。喵小姐看见没有别的喵，放下心来，自己也有些困，就躺在熊猫先生肚皮上也睡了起来，不断的拿尾巴拍打着熊猫先生的脸，熊猫先生不断的打着喷嚏。（人家昨天睡懒觉啦，别生气喽）</p>' +
      '</figcaption>' +
      '<img src="Images/a5.jpg" alt="img01"/>' +
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