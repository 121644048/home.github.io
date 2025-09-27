var iUp = (function () {
	var time = 0,
		duration = 150,
		clean = function () {
			time = 0;
		},
		up = function (element) {
			setTimeout(function () {
				element.classList.add("up");
			}, time);
			time += duration;
		},
		down = function (element) {
			element.classList.remove("up");
		},
		toggle = function (element) {
			setTimeout(function () {
				element.classList.toggle("up");
			}, time);
			time += duration;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	};
})();

function getBingImages() {
	/**
	 * 获取Bing壁纸
	 * 直接使用新的API地址获取随机Bing图片
	 */
	var panel = document.querySelector('#panel');
	// 使用新的API地址
	var url = "https://bing.liushen.fun/api/random?redirect=true";
	panel.style.background = "url('" + url + "') center center no-repeat #666";
	panel.style.backgroundSize = "cover";
}

function decryptEmail(encoded) {
	var address = atob(encoded);
	window.location.href = "mailto:" + address;
}

document.addEventListener('DOMContentLoaded', function () {
	// 使用自定义文本
	document.getElementById('description').innerHTML = "我是Sun Boy，一名基层工作者，心中有无限想法却无法实现。<br/>「<strong>爱好三角洲、乒乓球、摄影、旅行</strong>」";

	var iUpElements = document.querySelectorAll(".iUp");
	iUpElements.forEach(function (element) {
		iUp.up(element);
	});

	var avatarElement = document.querySelector(".js-avatar");
	avatarElement.addEventListener('load', function () {
		avatarElement.classList.add("show");
	});
});

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
	if (navigationWrapper.style.display == "block") {
		navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			navigationWrapper.classList.toggle('visible');
			navigationWrapper.classList.toggle('animated');
			navigationWrapper.classList.toggle('bounceOutUp');
			navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
		});
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceOutUp');
	} else {
		navigationWrapper.classList.toggle('visible');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
	}
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-list');
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-angleup');
	btnMobileMenu.classList.toggle('animated');
	btnMobileMenu.classList.toggle('fadeIn');
});

function showWeChatModal() {
	const modal = document.getElementById('wechatModal');
	modal.style.display = 'flex';
	setTimeout(() => {
		modal.style.opacity = '1';
		modal.style.visibility = 'visible';
	}, 10);
}

function closeWeChatModal() {
	const modal = document.getElementById('wechatModal');
	modal.style.opacity = '0';
	modal.style.visibility = 'hidden';
	setTimeout(() => {
		modal.style.display = 'none';
	}, 300);
}
