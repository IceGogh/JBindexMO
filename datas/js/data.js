/**
 * Created by Administrator on 2017/8/27.
 */

function resize(){
    var BaseWidth = document.documentElement.clientWidth;
    var Rem = BaseWidth/32;
    document.documentElement.style.fontSize = Rem + 'px';
}
resize();
window.onresize = function(){
    resize();
};
