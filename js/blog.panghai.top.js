fetch('https://v6-widget.51.la/v6/JnHw7yNkc1XsvRUB/quote.js').then(res => res.text()).then((data) => {
    let title = ['最近活跃访客', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
    let num = data.match(/(?<=<\/span><span>).*?(?=<\/span><\/p>)/g)
    let s = document.querySelectorAll('#statistic .content')[0]
    for (let i = 0; i < num.length; i++) {
        if (i == 0 || i == num.length - 1) continue;
        s.innerHTML += '<div><span>' + title[i] + '</span><span class="num">' + num[i] + '</span></div>'
    }
});
fetch('https://api.vvhan.com/api/visitor.info').then(res => res.json()).then((data) => {
    let c = document.querySelectorAll('#visitor .content')[0]
    c.innerHTML = `<div><span>系统</span><span class="num">${data['system'].split(' ')[0]}</span></div>
    <div><span>地址</span><span class="num">${data['location']}</span></div>
    <div><span>IP地址</span><span class="num">${data['ip']}</span></div>
    <div><span>天气</span><span class="num">${data['tq']}</span></div>
	<div><span>温馨提示</span><span class="num">
		<div style="width:100% !important"><span style="font-size:1.5rem;font-weight:bold;display:block;">${data['tip']}</span></div>
	</span></div>
    `
});