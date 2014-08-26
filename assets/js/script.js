// 滚动 Fixed
function scroll_top(){
	var scrollPos;
	if (typeof window.pageYOffset != 'undefined') {
		 scrollPos = window.pageYOffset;
	}
	else if (typeof document.compatMode != 'undefined' &&
		 document.compatMode != 'BackCompat') {
		 scrollPos = document.documentElement.scrollTop; 
	}
	else if (typeof document.body != 'undefined') {
		 scrollPos = document.body.scrollTop;
	}
	return scrollPos;
}

function scroll_nav() {
	var nav = document.getElementById("nav");
	var vh = window.screen.height * 0.5;
	if (scroll_top() > vh) {
		nav.className = "main_nav_ctn main_nav_ctn_s";
	} else {
		nav.className = "main_nav_ctn";
	}
}

window.onscroll = scroll_nav;

nav.onclick = function scrollTop() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
};