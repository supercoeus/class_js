/**
 * jquery常用方法总结
 * @author: han
 * @time: 2015-07-23
 */


/**
 * [jquery全选与取消全选]
 * @return null
 */
function allselect() {
	$("alldel").click() {
		$("input[name='check']").prop("checked", this.checked);
	}
}

/**
 * [jquery实现单项选择]
 * @return null
 */
function singleSelect(elem) {
	$(this).addClass('selected').siblings().removeClass('selected');
}

/**
 * [jquery实现多行选中]
 * @return null
 */
function ctrlSelect(elem) {
	$("#tiles li").click(function(event) {
        var _this = $(this);
        $(this).each(function() {
            _this.toggleClass('selected');
        });
	});
}

/**
 * js判断各个浏览器内核
 * @return {[type]} [description]
 */
function getExplorer() {
	var explorer = window.navigator.userAgent ;
	//ie 
	if (explorer.indexOf("MSIE") >= 0) {
	alert("ie");
	}
	//firefox 
	else if (explorer.indexOf("Firefox") >= 0) {
	alert("Firefox");
	}
	//Chrome
	else if(explorer.indexOf("Chrome") >= 0){
	alert("Chrome");
	}
	//Opera
	else if(explorer.indexOf("Opera") >= 0){
	alert("Opera");
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){
	alert("Safari");
	}
}

/**
 * 判断是否为微信浏览器
 * @return {Boolean} [description]
 */
function is_weixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}