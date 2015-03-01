 $(document).ready(function () {
    /*标题提示效果 start*/
    $(".updateNote").tipTip({defaultPosition: "top", maxWidth: "auto", edgeOffset: 2});
    $(".updateNoteInput").tipTip({defaultPosition: "bottom", maxWidth: "auto", edgeOffset: 2, keepAlive: true});
    /*标题提示效果 end*/
 });

/*百度统计代码 start*/
var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?cc19940e170de7f3eaddda5652ddbbca";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
/*百度统计代码 end*/

 /*TAB切换效果 start*/
function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "hover" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}
 /*TAB切换效果 end*/

