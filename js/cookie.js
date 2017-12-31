function getCookie(){
	// 指定したcookieの値を外部サイトに渡してcookieとして認識させたい
	document.cookie = 'data1=1234;path=/;domain=.ipa.go.jp';
	location.href="https://www.ipa.go.jp/";
}
