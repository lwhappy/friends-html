

function getRequest(method) {
    var handle = function(data){
        if(method && method === "encodeURIComponent") {
            return decodeURIComponent(data);
        } else {
            return unescape(data);
        }
    };

    var rel = window.location.href;
    var index = rel.indexOf("?");

    var url = rel.substring(index); //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            var arr = strs[i].split("=");
            theRequest[arr[0]] = handle(arr[1]);
        }
    }
    return theRequest;
}

function loading() {
    var o = {};
    
    var image = new Image();
    image.src = "resource/images/loading.png";
    var add = function() {
        $("#loading").remove();
        var parentTag = arguments[0] || "body";
        var text = arguments[1];
        
        var h = $(window).height() - $(parentTag).offset().top;
        h = h + "px";
        var t = $(parentTag).offset().top;
        t = t + "px";
        var _style = "height:" + h + ";top:" + t;
        var loadingHtml = '<div id="loading" class="box-v-center" style="' + _style + '">';
        //var loadingHtml = '<div id="loading" class="box-v-center" >';
        if(text){
            loadingHtml += '<p style="text-align:center;margin-top:10px;">'+ text + '</p>';
        }
        loadingHtml += '</div>'
        $("body").append(loadingHtml);
    };
    var append = function() {
        $("#loading").remove();
        var parentTag = arguments[0] || "body";
        var text = arguments[1];
        
        var h = 40;
        h = h + "px";

        var t = $(window).height() - 40;
        t = t + "px";
        var _style = "height:" + h + ";top:" + t;
        var loadingHtml = '<div id="loading" class="box-v-center" style="' + _style + '">';
        //var loadingHtml = '<div id="loading" class="box-v-center" >';
        if(text){
            loadingHtml += '<p style="text-align:center;margin-top:10px;">'+ text + '</p>';
        }
        loadingHtml += '</div>'
        $("body").append(loadingHtml);
    };
    var remove = function() {
        $("#loading").remove();
    };
    o.add = add;
    o.remove = remove;
    o.append = append;
    return o;
}
function noContent(){
    var text1 = arguments[0] || "";
    var text2 = arguments[1] || "";
    $("html,body").css("height","100%");
    $(".sign-container").addClass("no-content box-v-center").css("height","100%").html('<img src="resource/images/no-content.png" /><p class="box-center" style="margin-top:24px;font-size:18px;color:#8a9397;">'+text1 +'</p><p class="box-center" style="margin-top:12px;font-size:14px;color:#afb7bb;">'+text2+'</p>');
}
/*提示框,content为提示内容,可以为html*/
function pop_tip(content,callback){
    if($("#tip_div").length != 0){
        return;
    }
    var maskW = $(".page").get(0).scrollWidth;
    var maskH = $(".page").get(0).scrollHeight;
    var mask = '<div id="tip_mask" style="position:absolute;left:0;top:0;z-index:1000;width:'+maskW+'px;height:'+maskH+'px;background-color:#333;opacity:0.5;"></div>';
    // var tipW = "20";
    // var tipH = "6";
    var tip_div = '<div id="tip_div" class="" style="position:absolute;color:#666;left:50%;top:50%;width:85%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background-color:#fff;border-radius:6px;z-index:2000;border-radius:3px;text-align:center;font-size:14px;">';
    tip_div += '<div style="padding: 20px 20px 20px;">'+content+'</div>';
    tip_div += '<div class="box-center"><button style="border: solid 1px #4cacf3;width: 100px;height: 30px;color: #4cacf3;border-radius: 6px;margin-bottom: 10px;" id="btn-confirm" class="box-center" >确定</button></div>';
    
    tip_div += '</div>';
    $(".page").append(mask);
    $(".page").append(tip_div);
    $("#btn-confirm").on("click",function(){
        $("#tip_div,#tip_mask").remove();
    })
    
}
function numAnimate(id,num){
    var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.', 
    };
    var obj = new CountUp(id, 0, num, 0, 2.5, options);
    obj.start();
}


