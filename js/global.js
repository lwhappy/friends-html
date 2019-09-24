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



