// 定义休眠函数
function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

// 定义引入js函数
function addScript(url) {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', url);
	document.getElementsByTagName('head')[0].appendChild(script);
}

var host = window.location.host;
if (host === "blog.panghai.top") {
	addScript("https://sdk.51.la/perf/js-sdk-perf.min.js")
	addScript("https://sdk.51.la/js-sdk-pro.min.js")
	new LingQue.Monitor().init({ id: "JnC2AbgRbb5Tqrw7", sendSuspicious: true, sendSpaPv: true });
	LA.init({ id: "JnHw7yNkc1XsvRUB", ck: "JnHw7yNkc1XsvRUB" })
	var el = document.createElement("script"); 
	el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?829f1e973776a573fabb58087ddf02bd8c82ad65127a8c20a59ade1867826777bc434964556b7d7129e9b750ed197d397efd7b0c6c715c1701396e1af40cec962b8d7c8c6655c9b00211740aa8a98e2e"; 
	el.id = "ttzz"; 
	var s = document.getElementsByTagName("script")[0]; 
	s.parentNode.insertBefore(el, s);
}

//休眠2秒
sleep(2000).then(() => {
	// console.clear();
	console.log("%c欢迎访问我的博客，在这里你会看到我的日常技术分享，以及博客优化分享\n如果有哪个样式看着挺好的，想用在自己博客上，尽管拿去，但不要拿去做商业活动呦\n", "font-size:20px;line-height:28px;color:#00AAE1");
})

fetch('https://blog.music.panghai.top').then(res => res.text()).then((data) => {
	data=JSON.parse(data)
	const ap = new APlayer({
		container: document.getElementById('player'),
		fixed: true,
		audio: data
	});
})


