// 定义休眠函数
function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

function welcome() {
	console.log("%c欢迎访问我的博客，在这里你会看到我的日常技术分享，以及博客优化分享\n如果有哪个样式看着挺好的，想用在自己博客上，尽管拿去，但不要拿去做商业活动呦\n", "font-size:20px;line-height:28px;color:#00AAE1");
}

//休眠2秒
sleep(2000).then(() => {
	// console.clear();
	welcome();
})

// 侧边栏访问统计
fetch('https://v6-widget.51.la/v6/JnHw7yNkc1XsvRUB/quote.js').then(res => res.text()).then((data) => {
	let title = ['最近活跃访客', '今日访问人数', '今日访问量', '昨日人数', '昨日访问量', '本月访问量', '总访问量']
	let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
	let s = document.querySelectorAll('#visitor .content')[0]
	if (s !== undefined) {
		for (let i = 0; i < num.length; i++) {
			if (i == 3 || i == 4) continue;
			s.innerHTML += '<div><p><span id=name>' + title[i] + '</span><span class="num">' + num[i] + '</span></p></div>'
		}
	}
}); 

// const ap = new APlayer({
//     container: document.getElementById('player'),
//     fixed: true,
//     audio: [
// 		{
// 			"title": "Mine Mine",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/100.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/100.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/100.webp"
// 		},
// 		{
// 			"title": "Mojito",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/101.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/101.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/101.webp"
// 		},
// 		{
// 			"title": "一路向北",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/102.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/102.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/102.webp"
// 		},
// 		{
// 			"title": "七里香",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/103.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/103.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/103.webp"
// 		},
// 		{
// 			"title": "不爱我就拉倒",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/104.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/104.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/104.webp"
// 		},
// 		{
// 			"title": "不能说的秘密",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/105.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/105.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/105.webp"
// 		},
// 		{
// 			"title": "不该 (with aMEI)",
// 			"author": "周杰伦、张惠妹",
// 			"url": "https://blog.music1.panghai.top/song/106.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/106.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/106.webp"
// 		},
// 		{
// 			"title": "东风破",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/107.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/107.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/107.webp"
// 		},
// 		{
// 			"title": "倒影",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/108.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/108.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/108.webp"
// 		},
// 		{
// 			"title": "借口",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/109.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/109.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/109.webp"
// 		},
// 		{
// 			"title": "兰亭序",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/110.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/110.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/110.webp"
// 		},
// 		{
// 			"title": "半岛铁盒",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/111.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/111.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/111.webp"
// 		},
// 		{
// 			"title": "反方向的钟",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/112.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/112.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/112.webp"
// 		},
// 		{
// 			"title": "发如雪",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/113.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/113.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/113.webp"
// 		},
// 		{
// 			"title": "可爱女人",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/114.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/114.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/114.webp"
// 		},
// 		{
// 			"title": "听妈妈的话",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/115.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/115.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/115.webp"
// 		},
// 		{
// 			"title": "告白气球",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/116.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/116.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/116.webp"
// 		},
// 		{
// 			"title": "夜曲",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/117.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/117.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/117.webp"
// 		},
// 		{
// 			"title": "她的睫毛",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/118.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/118.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/118.webp"
// 		},
// 		{
// 			"title": "安静",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/119.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/119.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/119.webp"
// 		},
// 		{
// 			"title": "屋顶",
// 			"author": "温岚、周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/120.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/120.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/120.webp"
// 		},
// 		{
// 			"title": "彩虹",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/121.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/121.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/121.webp"
// 		},
// 		{
// 			"title": "我是如此相信",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/122.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/122.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/122.webp"
// 		},
// 		{
// 			"title": "我落泪情绪零碎",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/123.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/123.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/123.webp"
// 		},
// 		{
// 			"title": "手写的从前",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/124.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/124.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/124.webp"
// 		},
// 		{
// 			"title": "搁浅",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/125.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/125.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/125.webp"
// 		},
// 		{
// 			"title": "断了的弦",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/126.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/126.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/126.webp"
// 		},
// 		{
// 			"title": "明明就",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/127.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/127.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/127.webp"
// 		},
// 		{
// 			"title": "星晴",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/128.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/128.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/128.webp"
// 		},
// 		{
// 			"title": "晴天",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/129.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/129.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/129.webp"
// 		},
// 		{
// 			"title": "暗号",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/130.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/130.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/130.webp"
// 		},
// 		{
// 			"title": "本草纲目",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/131.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/131.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/131.webp"
// 		},
// 		{
// 			"title": "枫",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/132.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/132.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/132.webp"
// 		},
// 		{
// 			"title": "浪漫手机",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/133.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/133.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/133.webp"
// 		},
// 		{
// 			"title": "烟花易冷",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/134.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/134.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/134.webp"
// 		},
// 		{
// 			"title": "爱在西元前",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/135.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/135.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/135.webp"
// 		},
// 		{
// 			"title": "爱情悬崖",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/136.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/136.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/136.webp"
// 		},
// 		{
// 			"title": "爱的飞行日记",
// 			"author": "周杰伦、杨瑞代",
// 			"url": "https://blog.music1.panghai.top/song/137.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/137.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/137.webp"
// 		},
// 		{
// 			"title": "爷爷泡的茶",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/138.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/138.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/138.webp"
// 		},
// 		{
// 			"title": "珊瑚海",
// 			"author": "周杰伦、Lara梁心颐",
// 			"url": "https://blog.music1.panghai.top/song/139.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/139.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/139.webp"
// 		},
// 		{
// 			"title": "白色风车",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/140.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/140.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/140.webp"
// 		},
// 		{
// 			"title": "稻香",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/141.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/141.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/141.webp"
// 		},
// 		{
// 			"title": "等你下课 (with 杨瑞代)",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/142.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/142.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/142.webp"
// 		},
// 		{
// 			"title": "简单爱",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/143.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/143.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/143.webp"
// 		},
// 		{
// 			"title": "粉色海洋",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/144.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/144.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/144.webp"
// 		},
// 		{
// 			"title": "红尘客栈",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/145.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/145.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/145.webp"
// 		},
// 		{
// 			"title": "红颜如霜",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/146.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/146.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/146.webp"
// 		},
// 		{
// 			"title": "给我一首歌的时间",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/147.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/147.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/147.webp"
// 		},
// 		{
// 			"title": "花海",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/148.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/148.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/148.webp"
// 		},
// 		{
// 			"title": "蒲公英的约定",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/149.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/149.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/149.webp"
// 		},
// 		{
// 			"title": "说了再见",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/150.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/150.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/150.webp"
// 		},
// 		{
// 			"title": "说好不哭 (with 五月天阿信)",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/151.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/151.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/151.webp"
// 		},
// 		{
// 			"title": "说好的幸福呢",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/152.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/152.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/152.webp"
// 		},
// 		{
// 			"title": "轨迹",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/153.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/153.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/153.webp"
// 		},
// 		{
// 			"title": "还在流浪",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/154.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/154.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/154.webp"
// 		},
// 		{
// 			"title": "错过的烟火",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/155.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/155.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/155.webp"
// 		},
// 		{
// 			"title": "阳光宅男",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/156.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/156.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/156.webp"
// 		},
// 		{
// 			"title": "青花瓷",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/157.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/157.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/157.webp"
// 		},
// 		{
// 			"title": "龙卷风",
// 			"author": "周杰伦",
// 			"url": "https://blog.music1.panghai.top/song/158.mp3",
// 			"lrc": "https://blog.music1.panghai.top/lrc/158.lrc",
// 			"pic": "https://blog.music1.panghai.top/pic/158.webp"
// 		}
// 	]
// });
