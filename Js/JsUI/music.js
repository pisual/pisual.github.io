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
      '<img src="Images/a1.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/3/2 喵小姐与凉皮子</h3><p>小姐平日里非常喜欢凉皮。但是受限于喵动物的肠道，不能多吃，并且吃完保证会生小喵不对不对，保证会回肚子</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a2.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/3/1 喵小姐与大胖萝卜</h3><p>喵小姐怒气匆匆的赶到熊猫先生家，把小略子绑在草莓秧上，冲进熊猫先生的卧室，拿起熊猫先生的三角形的粉色的手绢擦了一下</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/28 喵小姐与大绿萝卜</h3><p>喵小姐最近入睡比较困难，每天睡觉前都要吃一根大绿萝卜才能入睡，熊猫先生非常担心这种情况</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a4.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/27 喵小姐与熊猫先生逛超市</h3><p>喵小姐窝里的零食逐渐不见了踪影，喵小姐嘴里一边嚼着零食一边说，“零食自己都飞了，我也没吃上”</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		     

      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/26 口 田 小姐的东西丢了</h3><p>喵小姐平日里非常依赖自己的一部老爷机来记录日记，经常在上边记录很多的事情，比方熊猫先生从自己又借了一分钱啥地</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	

      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/25 喵小姐与熊猫先哼的夜间蹭馆子</h3><p>今天熊猫先生在喵小姐呆的的有些晚，因为PANG喵小姐禁止熊猫先生在家里过夜，再加上上回压塌了房顶，没有了住的地方</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		   

      '<li>' +
      '<figure>' +
      '<img src="Images/a4.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/24 喵小姐与西红柿牛肉</h3><p>今天喵小姐突然想吃西红柿牛头，便大早上打电话叫熊猫先生来，熊猫先生到了之后，喵小姐正在洗粉色的不可描述的东西</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a4.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/23 喵小姐与逛超市</h3><p>喵小姐今天晚上身体稍微恢复了些，看到窝里的吃的都吃完啦，便撩上熊猫先生去裴欹超市进行购物</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018.2.22 喵小姐与不想洗澡</h3><p>喵小姐今天身体稍微痊愈了一些，准备洗个热水澡，但是因为理顺猫毛比较麻烦，所以懒病又犯了，就一直挣扎着到底去不去洗</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	  
		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018.2.21 喵小姐想要锻炼身体</h3><p>喵小姐近日突然觉悟，想要锻炼身体增强身体免疫力，正在想哪种方法的时候，发现自己的室内小略子运动车自从买来就没用过</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	  
		     
		     
     '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/20  喵小姐欺负熊喵先生</h3><p>喵小姐今日感冒变得严重了，熊喵先生非常担心，因为喵小姐的感冒断断续续的持续了一个多月</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	  
		     
		     
     '<li>' +
      '<figure>' +
      '<img src="Images/a2.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/19 喵小姐与强迫看医生</h3><p>喵小姐今天下午，身体的不适变得更强烈了，熊猫先哼便求着喵小姐去看医生，喵小姐傲娇的摇了摇头</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	  
		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a4.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/18 喵小姐与第一次煎牛排</h3><p>喵小姐今日有些感冒，准备自己做些吃的，就拿出了熊猫先哼送的牛排🥩，这块牛排采用上等小妞子的屁股上的肉肉精制而成</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	    
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img02"/>' +
      '<figcaption>' +
      '<h3>2018/2/16 喵小姐与感冒</h3><p>喵小姐今日来身体不是很棒，服用了密集青蛙🐸医生开来的密集蛙卵感冒药之后，更是整天困的迷迷糊糊</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +	     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '<figcaption>' +
      '<h3>2018/2/15 喵小姐与油炸豆皮</h3><p>喵小姐今天与熊猫老师出去吃喵崽子火锅</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +
		     
		     
      '<li>' +
      '<figure>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '<figcaption>' +
      '<h3>2018/2/14 喵小姐番外篇-流浪喵星</h3><p>喵小姐有一段十分传奇的过去，在来到熊猫星生活之前，喵小姐曾经生活在喵星上</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img04"/>' +
      '<figcaption>' +
      '<h3>2018/2/14 喵小姐与情人节</h3><p>今天是喵小姐与熊猫先生度过的第一个情人节</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +


      '<li>' +
      '<figure>' +
      '<img src="Images/a3.jpg" alt="img04"/>' +
      '<figcaption>' +
      '<h3>2018.2.13 喵小姐与打屁股</h3><p>喵小姐表示非常愤怒，给熊猫先生立下两条规矩，1，不能再喵小姐家离过夜，2，不能上喵小姐的床</p>' +
      '</figcaption>' +
      '</figure>' +
      '</li>' +

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
      '<h3>2018/3/2 喵小姐与凉皮子</h3>' +
      '<p>小姐平日里非常喜欢凉皮。但是受限于喵动物的肠道，不能多吃，并且吃完保证会生小喵不对不对，保证会回肚子，所以熊猫先哼严加看管，不让喵小姐吃。喵小姐在被看管的1年后，实在是忍不住了，这一天，喵小姐兜里揣着《去哪里都行券》，《哪里都可以随便亲券》，《噜噜券》，《挠脚心100天券》，《拿小毛刷刷耳朵100天券》，《等其他所有咻咻（羞羞）全部通过券》这些券去找熊猫先哼，熊猫先哼看到这些券纠结了一下，纠结了很长时间，愁了很长时间，愁的都想吃烤冷面了，最后和喵小姐说，还是缺了一张券，要不自己不太合适，就又从喵小姐要了《呕吐蛋清分离器券》，喵小姐为了吃凉皮，直接通过了这张券，高兴的汪汪的叫了两声。熊猫先生随后带着喵小姐去村头的《流大鼻涕猪头凉皮店》吃了一碗凉皮，喵小姐一看见凉皮上开，馋的直接跳到了桌子上，用爪子抓了起来，大口大口的吃了起来，馋的耳朵都红了，熊猫先哼看着喵小姐，寻思着自己的券，总感觉自己亏了。（好啦，乖乖睡觉，明天接着撩小哥哥）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/3/1 喵小姐与大胖萝卜</h3>' +
      '<p>喵小姐怒气匆匆的赶到熊猫先生家，把小略子绑在草莓秧上，冲进熊猫先生的卧室，拿起熊猫先生的三角形的粉色的手绢擦了一下脸，发现熊猫先生的被窝鼓鼓的，便偷偷钻了进去，准备咬熊猫先生的肚子，刚一下嘴，发现非常硬，难道熊猫先生偷偷锻炼，锻炼出了肌肉？再一咬，发现很脆，这怎么回事，随后在一模，又摸到一个硬硬的肚子，然后又咬了一口，结果越摸越多，终于，大胖萝卜们终于受不了了，全都跑了出来，喵小姐这才发现，原来大胖萝卜全在熊猫先生的被窝里。熊猫先生无辜的表示自己没有别的喵，只有别的大胖萝卜，喵小姐听到后更愤怒了，上去咬了熊猫先生的肚脐眼一下，然后肚脐眼就被咬掉了，没有了，熊猫先生抱着大绿萝卜开始哭了起来，还我肚脐眼！还我肚脐眼！这样子呼喊着。喵小姐这时候看到萝卜们在后门瑟瑟发抖，便冲上前去，把他们每个都咬成了萝卜炖牛肉，熊猫先生一边哭着，一边盛了一碗饭泡汤吃了起来。（好啦，心情最重要啦，乖乖睡觉，明天可以撩小哥哥了）</p>' +
      '</figcaption>' +
      '<img src="Images/a2.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/28 喵小姐与大绿萝卜</h3>' +
      '<p>喵小姐最近入睡比较困难，每天睡觉前都要吃一根大绿萝卜才能入睡，熊猫先生非常担心这种情况，这不，今天熊猫先生在家里正准备睡觉，突然门口传来咣咣咣的敲门声，熊猫先生非常疑惑，这么晚，是谁呢？打开大门口，发现门口来了100多位大青萝卜，原来喵小姐因为每天都要吃大青萝卜，便在家里种了很多，每天晚上出去挖一个回来吃，据大青萝卜哭诉，喵小姐每天因为睡不着觉，非常闹心，边对着大青萝卜狠狠的不断撕咬着，还不断的拿指甲摩大青萝卜，发出刺耳的嘎吱嘎吱的声音，大青萝卜发出的痛苦的叫声吓得门口地里的萝卜非常害怕，每天听着这种声音，终于有一天受不了了，便集体跑到熊猫先生家里告状，熊猫先生正在思考这件事情的时候，只见远处传开一阵尘土，仔细一看，喵小姐一脸愤怒的骑着小略子飞奔而来，大青萝卜看见这种情况，吓得全都钻进熊猫先生的被窝里面了。（欲知后事如何，请发挠脚心券，看完就睡喵子，乖）</p>' +
      '</figcaption>' +
      '<img src="Images/a3.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
		     
		     
		      
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/27 喵小姐与熊猫先生逛超市</h3>' +
      '<p>喵小姐窝里的零食逐渐不见了踪影，喵小姐嘴里一边嚼着零食一边说，“零食自己都飞了，我也没吃上”，然后今天决定和熊猫先生去村里的《犭苗 月 半超市》去购买小食品，走进犭苗 月 半超市。门口是最新的裴琦站台，展台上有各种的周边食品，还有巨大的粉色的玩偶，一捏就发出哼哼的声音，熊猫先生眼睛一直盯着看，结果喵小姐非常愤怒，一口咬在了熊猫先生鼻子上，咬的熊猫先生肚皮都痒了，掌握也痒了，既然喵小姐不给买，那只好继续逛超市了。最近本地开了几家百香喵果店，这个水果非常神奇，里面非常密集，熊猫先生一看见，就浑身发麻，然后喵小姐就给了熊猫先生一张呦呦呦券，喵小姐选购了两个百香喵果，随后路过了草莓店铺前，今天的草莓非常新鲜，也非常密集，熊猫先生又要犯病了，喵小姐赶快买好一个放进筐里，随后喵小姐还选购了手指头饼干，这个饼干非常神奇，要开后，里面还有红色的果酱，喵小姐恶心的猫毛都炸开了，还选购了烤喵专用调料，这样吃喵的时候，可以撒上调料，显得非常好吃，路过布丁区，喵小姐又迈不开步子了，只好买了一个紫色的里面带红点点的还带了一只大青蛙的布丁，喵小姐更加恶心了，胡子都卷起来了，熊猫先生非常想要佩琦小红帽饼干，喵小姐就是不给买，熊猫先生暗自抹着眼泪，喵小姐看着非常可怜，就给熊猫先生买了佩琦背包，熊猫先生高兴的狠狠的亲了喵小姐一下，亲完后发现喵小姐消失了，请问喵小姐去哪里了？（看完就睡觉，乖）</p>' +
      '</figcaption>' +
      '<img src="Images/a4.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
     '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/26 口田 小姐的东西丢了</h3>' +
      '<p>喵小姐平日里非常依赖自己的一部老爷机来记录日记，经常在上边记录很多的事情，比方熊猫先生从自己又借了一分钱啥地，熊猫先生借用自己的粉色三角形手绢啥地的，都记录在上边，但是老爷机就是老爷机，一天，熊猫先生正在家里睡觉，露着光光的肚皮，突然，喵小姐冲了进来。跳上熊猫先生的肚皮上，狠狠的咬着掌握，就是不松口，咬的都送了一张去哪里都可以券给熊猫先哼了，熊猫先生痛苦的醒了过来，看见有一只大团子在肚皮上，便上去咬了一口，结果正好咬到尾巴上，这下可好，喵小姐更愤怒了，自己把妞妞咬掉了。随后，熊猫先生把喵小姐耳朵拎了起来，让喵小姐冷静一下，但是还是冷静不下来，熊猫先生只好拿出祖传了月半口苗牌冰糕，拿给喵小姐吃。喵小姐这才冷静下来，喵小姐告诉熊猫先生，自己借熊猫先生钱的日记丢了。熊猫先生表示，如果不记得该还多少钱，就还一辈子好啦。喵小姐这才高兴的乐了起来，露出了放高利贷一样的笑容，熊猫先生随后拿出枕头底下珍藏的2分钱给喵子，喵子高兴的骑着小略子唱着小曲（呱呱呱呱嗝🎵，顿顿顿顿汪🎵）回家了。（有熊猫先生在，东西丢了就丢了吧）</p>' +
      '</figcaption>' +
      '<img src="Images/a3.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/25 喵小姐与熊猫先哼的夜间蹭馆子</h3>' +
      '<p>今天熊猫先生在喵小姐呆的的有些晚，因为PANG喵小姐禁止熊猫先生在家里过夜，再加上上回压塌了房顶，没有了住的地方，只好准备打道回府，喵小姐在送行的时候，肚子发出呱呱和吱吱嘎嘎的声音，晚饭吃的有点早，估计是饿了呢，熊猫先生想到，看到天色还有些发光，就带着喵小姐去吃村口的关东煮店。胖熊关东煮店只有在天黑之后才会出摊，俩人来到店门口。老板刚刚开始营业，只要熊猫先生和喵小姐两人。俩人便在店门口坐下，点了煮萝卜和鱼丸和油豆腐，在夕阳的余晖下，大吃特吃起来，门口，结束了一天劳作的胖略熊正在走回家。闻到关东煮店的香气，馋的也走不动了。喵小姐看到有自己最喜欢吃的紫色大萝卜，高兴的脸都圆了起来，使劲咬起萝卜来，但是刚出锅的萝卜很烫，把喵小姐烫的尾巴不断炸毛，熊猫先生看到，只好用自己沾满口水的舌头帮喵小姐降温。平常熊猫先生并不带喵小姐出来吃宵夜摊子，熊猫先生担心不干净，怕小姐吃坏肚子，但是看到喵小姐吃的满脸是汤水，馋的哈喇子满天飞的样子，熊猫先生决定，虽然不能经常来，还是隔一段时间带喵小姐来吃一些，喵小姐乘熊猫先生不注意，把熊猫先生的那份也吃掉了。熊猫先生正义的拿出去哪都可以券，然后把喵小姐的爪子按了上去（早点睡哦，养好身体）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/24 喵小姐与西红柿牛肉</h3>' +
      '<p>今天喵小姐突然想吃西红柿牛头，便大早上打电话叫熊猫先生来，熊猫先生到了之后，喵小姐正在洗粉色的不可描述的东西，熊猫先生响帮小姐洗，刚下手，就被喵小姐咬了一口，熊猫先生显得十分委屈。熊猫先生只好去做西红柿牛肉，首先把西红柿上边切一个十字。随后用热水淋上去，这样皮就下来了，随后，把西红柿切成小块，这时候，喵小姐洗完了不可描述的粉色吹风筒，就来到熊猫先生的厨房，站在凳子上，指挥者熊猫先生干活，熊猫先生随后拿起一根大雪莲塞到喵小姐的嘴里，喵小姐着菜消停下来。随后时处理牛头，把巨大的牛头下锅，煮熟，然后加入香料爆香，加入煮好的牛头，再次翻炒，随后加入水炖40分钟，这时候，喵小姐已经饿的挂在了熊猫先生的掌握上，熊猫先生忍着剧痛不断的翻炒着菜。40分钟过后，终于可以吃了，喵小姐这才松开掌握，成了一大碗饭，用勺子使劲按了几下，加入了浓厚的汤汁，大吃了一口，好吃的尾巴都立起来了，高兴的让熊猫先生给自己挠脚心。（好好睡觉，注意保暖喵子）</p>' +
      '</figcaption>' +
      '<img src="Images/a4.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/23 喵小姐与逛超市</h3>' +
      '<p>喵小姐今天晚上身体稍微恢复了些，看到窝里的吃的都吃完啦，便撩上熊猫先生去裴欹超市进行购物，这家超市是村里新开的超市，有很多Peep pig的周边产品，比如玩具，果冻，饼干，洗喵专用洗涤剂，咬肚皮专用的绑手带子和挠脚心专用小毛刷，喵小姐很喜欢这家的东西，首先进门的时候。喵小姐相中了他们家的喵脸盆子，这个喵脸盆子采用上等小喵工匠，让他们精心制作打磨而成，光亮的喵小姐可以拿来照镜子，喵小姐拿起来，高兴的了涂了芭比粉口红，还高兴的给熊猫先生发了随便去哪里都可以券，熊猫先生显得非常高兴，时候喵小姐还购买了橙汁，买橙子的时候非常认真，和每一个橙子都认真的交流，问了他们是不是女橙子，他们答应是女橙子的才会挑选出来，还有买了2个高山大土豆汁，回家准备生吃，看见今天的密集小柿子非常好，就还选购了密集小柿子，熊猫先生一看，都要犯病了，喵小姐随后还在熊猫先生的掌握兜里一顿乱摸，乘机大摸特摸熊猫先生的掌握，熊猫先生脸都红了。（早些睡，身体要养的棒棒的）</p>' +
      '</figcaption>' +
      '<img src="Images/a4.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018.2.22 喵小姐与不想洗澡</h3>' +
      '<p>喵小姐今天身体稍微痊愈了一些，准备洗个热水澡，但是因为理顺猫毛比较麻烦，所以懒病又犯了，就一直挣扎着到底去不去洗，经过一番痛苦的挣扎，终于战胜了内心的恶魔，还是决定去洗一洗。喵小姐因为毛比较多，不能用常用的洗浴用品，喵小姐拿出前几天买来的小略子牌馋猫喵洗涤套装，包含了尾巴清洗剂，用来清洗尾巴，洗完后，尾巴会变得非常蓬松，说明上还加了一句“如果使用后，让熊猫先生不断的抚摸，会盘出非常靓丽的颜色”。喵小姐清洗耳朵也用了专门的洗涤剂，喵小姐的耳朵非常敏感，正常情况下，只要一摸，就会肚皮上面长出密密麻麻的妞妞，熊猫先生看到后就会晕倒，自从使用这个洗涤剂，即使熊猫先生使用大舌头粘满口嘴的那种，使劲舔上去，也不会浑身发抖，说明上还有一句“经常让熊猫先生咬耳朵，有利于耳朵健康”。清洗肚子的洗涤剂叫“熊随咬牌”洗涤剂，这个洗完后，熊猫先生咬起来口感就会非常好，喵小姐经常使用，但是因为熊猫先生咬完后都是口水，所以需要经常清洗。（小心着凉，注意保暖喵子）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	 
		     
	
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018.2.21 喵小姐想要锻炼身体</h3>' +
      '<p>喵小姐近日突然觉悟，想要锻炼身体增强身体免疫力，正在想哪种方法的时候，发现自己的室内小略子运动车自从买来就没用过，便准备用室内小略子运动车锻炼，室内小略子运动车是一个三条腿的座地的运动设备，使用的时候需要坐在上边，使劲用脚蹬下面的踏板，然后车就发出美喵！瘦喵！这样的声音，如果想要加大阻力，使用者需要喊出”美喵“的口令，就会自动加大阻力，如果喊出“瘦喵”，就会减小阻力，使用起来非常简单，喵小姐第一次使用，力气比较小，都不用加阻力就累的气喘吁吁的，在喵小姐休息的时候，熊小喵先生跨上小略子运动车，等起来感觉没什么力气，就准备加大阻力，喊起来“美喵！美喵！”，因为每一次加的的阻力比较小，都不断的喊，喵小姐听到，愤怒的跳到熊猫先哼身上一顿狂药，头发咬掉了，熊猫先哼心中疑惑，难道是加阻力喵小姐比较不爽，那就减小一点阻力吧，便又大声喊起来“瘦喵！瘦喵！”，喵小姐听到更生气了，直接咬到熊猫先生的肚脐上不下来，熊猫先生痛的脚都变小了。（乖乖养病，注意保暖，做健康大喵子，我会全力支持喵小姐的锻炼行动的）</p>' +
      '</figcaption>' +
      '<img src="Images/a3.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	  	
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/20  喵小姐欺负熊喵先生</h3>' +
      '<p>喵小姐今日感冒变得严重了，熊喵先生非常担心，因为喵小姐的感冒断断续续的持续了一个多月，身体变得更脆弱了。一拎耳朵，就起来了，都瘦了。熊喵先生打电话询问喵小姐，结果喵小姐还是非常傲娇的不去看密集青蛙医生，熊喵先生气的上嘴咬了一口，结果喵小姐也咬了熊喵先生掌握一口，掌握都咬的变成螺丝扣了，随后在熊喵先生的努力劝说之下，喵小姐终于肯出门看医生了，结果这时候下班了。第二天一大早，喵小姐与熊喵先生开着小略子奔去医院，经过化验，结果是衣原体感染，经过青蛙医生的配药，喵小姐需要打吊瓶，喵小姐有开始拼命的咬着熊喵先生的掌握，结果发现前一天咬的太狠了，都咬没了，顿时泄了气，只好乖乖打针了。打好了针，喵小姐的病情好转了起来，熊喵先生也准备和喵小姐一起努力，彻底打败病魔。</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	  		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/19 喵小姐与强迫看医生</h3>' +
      '<p>喵小姐今天下午，身体的不适变得更强烈了，熊猫先哼便求着喵小姐去看医生，喵小姐傲娇的摇了摇头，用尾巴抽打着熊猫先哼，就不去。熊猫先哼叹了一口气，便伸出双手，使劲的肉喵脑袋，结果喵小姐还是不去。情急之下，熊猫先哼拿出自己积攒的掌握送给了喵小姐，还答应喵小姐病好之后，带喵小姐去吃村口新开的麻辣喵锅，喵小姐有点心动了，熊猫先哼又加上了可以上门揉肚子揉到舒服的⭕️，喵小姐这才答应去看医生。随后熊猫先哼带领着喵小姐去看门诊，医生让喵小姐张开喉咙检查小喵子的状态，发现又一些发炎，便要给喵小姐打针，喵小姐奋力拒绝，只好买来药吃啦，两人花了11个 口苗币买来啦药，熊猫先哼还背着喵小姐回到家里，并亲手喂下去，喵小姐傲娇的含着药在嘴里不咽下去，熊猫先哼情急之下只好进行大舌头通气法把喵小姐的药通了下去。随后还捏了喵爪子进行了按摩，希望喵小姐早日好起来，这样才能快快乐乐的出去一起玩耍，喵小姐作为奖励，奖励了熊猫先哼一号柜台⭕️一张（好好养病哦）</p>' +
      '</figcaption>' +
      '<img src="Images/a2.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	  	
		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/18 喵小姐与第一次煎牛排</h3>' +
      '<p>2018/2/18 喵小姐与第一次煎牛排喵小姐今日有些感冒，准备自己做些吃的，就拿出了熊猫先哼送的牛排🥩，这块牛排采用上等小妞子的屁股上的肉肉精制而成，经过10只小喵子的大力锤砸1天入味，看着生牛排，喵小姐就饿的肚子发出呱呱的声音（因为最近吃的密集那啥药，所以发出呱呱的声音），声音超大，隔壁小略子都听见了。牛排拿出来化了一会，但是喵小姐不会做呀，便给熊猫先哼打起了电话，熊猫先哼非常仔细的教喵略子具体的步骤，首先，吧牛排放在厨房用纸上吸干净血水，洗干净之后，在锅里加入黄油加热，黄油起泡之后，加入牛排，这时候，一阵阵的奶香味就散发出来了，喵小姐馋的哈喇子都落拉锅里了，一边煎3分钟，反面煎3分钟，就可以出锅啦，加上胡喵酱，喵小姐猛扑上去，就过把爪子烫到了，熊猫先哼赶快叫喵小姐冲凉水，大笨喵子，笨喵子，笨，笨喵，笨。喵小姐还拿出了中午在树上摘的一个煎饺，便开始大吃起来。吃的满脸是油，随后吃饱之后，熊猫先哼还监督了喵小姐喝药药，喵小姐十分不情愿的喝下了密集那啥药。（乖乖喝药！）</p>' +
      '</figcaption>' +
      '<img src="Images/a4.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	  	     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/16 喵小姐与感冒</h3>' +
      '<p>喵小姐今日来身体不是很棒，服用了密集青蛙🐸医生开来的密集蛙卵感冒药之后，更是整天困的迷迷糊糊，连饭都不好好吃了，熊猫先哼见状，便把喵小姐偷回了家，好好饲养，因为是偷的，没有被人发现，所以就不是犯罪，今天熊猫先哼给喵小姐喂了大猪蹄子馅饼🥙，还有大萝卜汤，喵小姐吃的高兴的尾巴都立起来了，吃完后，熊猫先哼好歹把喵小姐哄的服下了密集青蛙卵感冒药，这时候，熊猫先哼看见药，已经浑身发麻，瑟瑟发抖。因为感冒药有催睡精的做用，喵小姐已经困的不行，便一下子趴在熊猫先哼的肚皮上，呼呼大睡起来，熊猫先哼吓得不敢动，就这么抱着喵小姐。喵小姐睡觉的过程中，不断的撕咬熊猫先哼的掌握，咬的都快绝种了，熊猫先哼见状，拿起自己厚厚的券本，只要喵小姐咬一下，就在上边按一个爪印，2小时过去了，喵小姐还是没有要醒的表现，厚厚的一本券都已经按完了爪印子，熊猫先哼放下券本，看见喵小姐呼吸有些不是畅通，变用自己的大舌头帮喵小姐鼻子👃通了通气，具体咋通的，太羞涩了就省略了。喵小姐醒来，已经是3小时以后的事情了，喵小姐醒来，发现还在熊猫先哼肚皮上，便又恶狠狠的咬了掌握一口，熊猫先哼疼的眼圈都黑了。（看完就睡哦。身体养的棒棒的，带喵子去吃好吃的）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	  	     
		     
		     
		     
      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/15 喵小姐与油炸豆皮</h3>' +
      '<p>喵小姐今天与熊猫老师出去吃喵崽子火锅，喵崽子火锅是村里最流行的的火锅，平常吃要提前好多天预约，不过今天中午，喵小姐与熊猫老师回家的路上，看见火锅店人不对，就上前打听没预约能不能吃火锅，老板喵崽子表示今天是很少见的没满员的日子，没预约也可以吃，俩人一听，非常高兴，决定今天在这里吃午饭了。喵崽子火锅他家的特色是油炸豆皮，喵小姐因为牙口不好，一只没有尝试过，今天俩人看见边上的人吃的超香，决定也来一份，不一会，一份巨大的油炸豆皮就上来了，散发出非常香的味道，表面布满了密集的孔孔，熊猫老师一看，差点晕过去，喵小姐赶快把油炸豆皮下锅，熊猫老师这才缓解过来，喵小姐喜欢吃煮成烂泥装的油炸豆皮，熊猫老师忍不住了，便提前吃了起来，油炸豆脯非常的有韧性，很有口感，而喵小姐的烂泥油炸豆皮，则需要放在碗里，用勺子吃，上面有密集的孔孔，熊猫老师的差点又犯病，吃饱后，俩人踏上了回家的路，喵小姐躺在车上。打着饱嗝。（喵子今天累坏了，要早些睡哦）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +	     
		     

      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/14 喵小姐番外篇-流浪喵星</h3>' +
      '<p>喵小姐有一段十分传奇的过去，在来到熊猫星生活之前，喵小姐曾经生活在喵星上，喵星是一个非常软呼呼的星球，就像喵小姐的肚子一样，但是有一天，喵星上的喵类们发现，自己星球的所需的巨大的铲屎盆要用完了，巨大的💩马上就要喷发出来，必须马上赶往熊猫星球，但是路途非常遥远，喵星人们经过联合铲屎大会研究，决定雇佣一万个小略子拉动星球前往熊猫星，当时，喵小姐还贡献了家里唯一的一只四条腿的稀有小略子。随着流浪喵星计划的开始，一万字小略子开始使劲拉着喵星飞奔着，这里面还有1000个4条腿的稀有小略子提供转弯的动力，随着距离越来越近，喵星球路过了咩星球，小略子们非常喜欢小咩子，都放弃了自己的任务，跑去撩小咩子，喵星球面临前所未有的危机，在这个危险时刻，喵小姐站了出来，给1万个小略子挨个喂了爆米花和肥喵快乐水，这才结束了这场危机。经过2年的长途跋涉，喵星球终于到达了熊猫星球的星系，和熊猫星球的熊猫们共用一个铲屎盆，喵小姐也因为伟大的事迹被大家所崇拜，但是喵小姐喜欢宁静的生活，便隐居到了熊猫星球的一个小乡村里，这便是喵小姐与熊猫先生结识之前的故事。喵小姐讲完这段故事，熊猫先生看了看窗外的小略子，心想铲屎盆真的是非常重要，但是喵小姐原来的小略子呢，还是没敢问，当然，这就是另外一个故事了（喵子早些睡哦）</p>' +
      '</figcaption>' +
      '<img src="Images/a1.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +



      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018/2/14 喵小姐与情人节</h3>' +
      '<p>今天是喵小姐与熊猫先生度过的第一个情人节，熊猫先生给喵小姐准备了神秘礼物，喵小姐也想要送给熊猫先生一件亲手制作的礼物，喵小姐虽然很笨笨的，但是辛苦的努力了一下午，终于做出了大盒子蛋糕，非常好吃，简直和蛋糕店做的一样，便把蛋糕装在了一个破了个大洞的的朔料袋里面，这样香味就可以飘散出来，喵小姐临出门前，馋的不行了，就偷偷咬了一口大盒子蛋糕，坐上小略子上面的时候，又饿了，就又咬了一口，蛋糕越来越小了。喵小姐开着小略子来到了熊猫先生家里，熊猫先生在路边翘首以盼着喵小姐，看见小略子的脑袋，便飞奔了过去，俩人一起坐上小略子，准备去吃饭。结果第一家吃饭的地方爆炸了，俩人就换了第二家，第二家客人很多，把红公鸡服务员忙的嘎嘎嘎大叫，俩人点了最爱吃的喵饺子和烧烤大餐，便开始今天的情人节，熊猫先生拿出了自己的小礼物，喵香水，希望喵子心情像香水一样愉悦，喵小姐则拿出了自己亲手制作的珍贵礼物，大盒子蛋糕，熊猫先生感动的也咬了一口，然后喵小姐也咬了一口，这左一口右一口，大盒子蛋糕越来越小，随后二人又去了大胖丫生活用品店，喵小姐购买了一个大胖猪台灯，随后在回家的路上，喵小姐咬了熊猫先生的500元区表示自己非常高兴。（喵小姐亲手制作的礼物，我会非常珍惜的！是最珍贵的礼物！以后还要给我做！）</p>' +
      '</figcaption>' +
      '<img src="Images/a5.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +



      '<li>' +
      '<figure>' +
      '<figcaption>' +
      '<h3>2018.2.13 喵小姐与打屁股</h3>' +
      '<p>熊猫先生因为经常赖在喵小姐家里，这一天，熊猫先生看见天色已晚，还想赖在喵小姐家里，喵小姐表示非常愤怒，给熊猫先生立下两条规矩，1，不能再喵小姐家离过夜，2，不能上喵小姐的床，熊猫先生听闻后，哭的死去活来，眼圈都哭黑了，喵小傲还恶狠狠的咬了熊猫先生的掌握一口留下证据。熊猫先生本来想回家，当时喵小姐一看天色确实已经晚了，就大赦的一会，把熊猫先生安排在自己家的房顶过夜，熊猫先生趴在房顶上，房顶的正下方正好是喵小姐，这样的喵小姐的两条规矩就没问题了，然后熊猫先生在房顶上扒拉扒拉，发现了一个小洞洞，就朝里面一看，正好可以看见喵小姐睡觉，熊猫先生就趴在房顶上朝喵小姐吹起，喵小姐突然感觉耳朵很凉，发现熊猫先生正在房顶上吹起，愤怒的把尾巴插了过去打熊猫先生的屁股！第二天，熊猫先生经过一夜的折腾，终于把房顶压塌了，掉在了喵小姐的卧室里，喵小姐气的跳了起来，坐在熊猫先生的身上，恶狠狠的开始打起了屁股。（还不让住。委屈委屈。。））</p>' +
      '</figcaption>' +
      '<img src="Images/a5.jpg" alt="img04"/>' +
      '</figure>' +
      '</li>' +


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
