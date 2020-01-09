// 微信能力检测
if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    callback();
} else {
    if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", callback, false);
    } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", callback);
        document.attachEvent("onWeixinJSBridgeReady", callback);
    } else {
        console.log('不支持 WeixinJSBridge')
    }
}

function callback(){
    new VConsole()
    var body = document.getElementsByTagName("body")[0]
    body.innerHTML = '测试文案-------'
    var iframe = document.createElement('iframe');
    var key = getQueryString('key')
    var link = "https://cloud.quklive.com/cloud/h5/" + key

    iframe.src = link
    iframe.style.border = 'none'
    iframe.width = "100%"
    iframe.height = "100%"
    body.appendChild(iframe);

    function getQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null;
    }
}
