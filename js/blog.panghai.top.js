// 定义休眠函数
function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

//休眠2秒
sleep(2000).then(() => {
	// console.clear();
	welcome();
})

function welcome() {
	console.log("%c欢迎访问我的博客，在这里你会看到我的日常技术分享，以及博客优化分享\n如果有哪个样式看着挺好的，想用在自己博客上，尽管拿去，但不要拿去做商业活动呦\n", "font-size:20px;line-height:28px;color:#00AAE1");
}

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
