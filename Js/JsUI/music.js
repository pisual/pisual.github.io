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
