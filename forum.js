
var JGtime = 10 + Math.random() * 400;//产生雪片的时间间隔
var flake = $("<div>·</div>").css("position", "absolute");//雪片对象
$(function () {
    setInterval(function () {//间隔JGtime产生一个雪片     
        var dWidth = $(document).width() - 100;//获取浏览器页面宽度
        var dHeight = $(document).height() - 100;//获取浏览器页面高度
        var startLeft = Math.random() * dWidth;//下落前左边的距离随机
        var endLeft = Math.random() * dWidth;//下落后左边的距离随机
        var flakeSize = 6 + Math.random() * 50;//雪片大小
        var startOpacity = 0.7 + 0.3 * Math.random();//开始的透明度
        var endOpacity = 0.4 + 0.3 * Math.random();//落下的透明度
        var durationTime = 4000 + 8000 * Math.random();//时间随机。所以速度随机
        flake.clone().appendTo($("body")).css({//复制一个雪片对象，添加到body，出现的位置
            "left": startLeft,
            "top": "-56px",
            "font-size": flakeSize,//大小
            "color": "#fff",//白色
            "opacity": startOpacity
        }).animate({
            "left": endLeft,
            "opacity": endOpacity,
            "top": dHeight
        }, durationTime, function () {
            $(this).remove();//当雪片到最后，调用回调函数，让他消失，是为了保持页面流畅
        });//经过一个随机的时间，变成上面的状态
        // index++;
    }, JGtime);
});
