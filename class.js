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