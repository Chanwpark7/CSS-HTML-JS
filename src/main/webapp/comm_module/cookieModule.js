/**
 * 객체를 모듈화 해서 재활용하도록 함.
 */
const checkCookie = () => {
	let user = getCookie("username");
	if (user != "") {
		alert("재방문 ${user}");
	} else {
		user = prompt("영어 이름.");
		if (user != "" && user != null) {
			setCookie("username", user, 30);
		}
	}
}

const getCookie = cname => {
	let name = cname + "=";
	let cookieStr = document.cookie.split(";");

	for (let i = 0; i < cookieStr.length; i++) {
		let c = cookieStr[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

const setCookie = (cname, cvalue, exdays) => {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));

	let expires = "expires=" + d.toUTCString();

	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	document.cookie = "passwd=1111"; //; expires="+expires;

	getCookie("passwd");
}

export {checkCookie,getCookie,setCookie};