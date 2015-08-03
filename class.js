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