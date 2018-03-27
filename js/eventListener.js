
window.onerror=handleErr
var txt=""
function handleErr(msg, url, line, colno, error){
    if(!!msg){
        loginEvent(window, 'error', eventListen, false, false); return;
    }else{
        var data = {};
        data.url = "URL: " + url;
        data.line = "行：" + line;
        data.colno = "列：" + colno;
        data.msg = error;
        if (!!error && !!error.stack){
            data.msg = error.stack.toString();
        }else if (!!arguments.callee){
            var ext = [];
            var f = arguments.callee.caller, c = 3;
            while (f && (--c>0)) {
            ext.push(f.toString());
            if (f  === f.caller) {
                    break;
            }
            f = f.caller;
            }
            ext = ext.join(",");
            data.msg = error.stack.toString();
        }
        console.log(data)
        debounce(http({
            url: 'http://wangyuanqi.info/fundebug',
            data: data
        }), 1);
        return true
    }

}
function debounce (func, wait) {
    var _timestamp, _timer
    return function () {
    var now = Date.now()
    if (_timestamp && ((now - _timestamp) < wait)) {
        clearTimeout(_timer)
    }
    _timestamp = now
    _timer = setTimeout(func.bind(this, ...arguments), wait)
    }
}
function http(setting){
    //设置参数的初始值
    var opts={
        method: (setting.method || "GET").toUpperCase(), //请求方式
        url: setting.url || "",	// 请求地址
        async: setting.async || true, // 是否异步
        dataType: setting.dataType || "json", // 解析方式
        data: setting.data || "", // 参数
        success: setting.success || function(){}, // 请求成功回调
        error: setting.error || function(){} // 请求失败回调
    }
    function params_format (obj) {
        var str = ''
        for (var i in obj) {
            str += i + '=' + obj[i] + '&'
        }
        return str.split('').slice(0, -1).join('')
    }
    var xhr=new XMLHttpRequest();
    if(opts.method == 'GET'){
        xhr.open(opts.method, opts.url + "?" + params_format(opts.data), opts.async);
        xhr.send();
    }else{
        xhr.open(opts.method, opts.url, opts.async);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(opts.data);
    }

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
            switch(opts.dataType){
                case "json":
                    var json = JSON.parse(xhr.responseText);
                    opts.success(json);
                    break;
                case "xml":
                    opts.success(xhr.responseXML);
                    break;
                default:
                    opts.success(xhr.responseText);
                    break;
            }
        }
    }
    xhr.onerror = function(err) {
        opts.error(err);
    }
}

function eventListen(e){
    var data = {}, href;
        data.url = e.target.location.href || e.currentTarget.location.href;
        data.msg = e.message;
        console.log(data, 'addEventListener')
        debounce(http({
            url: 'http://wangyuanqi.info/fundebug',
            data: data
        }), 1);
}
/*
* 事件注册
* @param Element     ele 
* @param String      eventType
* @param Function    fn
* @param Boolean     isRepeat
* @param Boolean     isCaptureCatch
* @return undefined
*/
function loginEvent(ele , eventType , fn , isRepeat , isCaptureCatch){
    if (ele == undefined || eventType === undefined || fn === undefined) {
        throw new Error('传入的参数错误！');
    }

    if (typeof ele !== 'object') {
        throw new TypeError('不是对象！');
    }

    if (typeof eventType !== 'string') {
        throw new TypeError('事件类型错误！');
    }

    if (typeof fn !== 'function') {
        throw new TypeError('fn 不是函数！');
    }

    if (isCaptureCatch === undefined || typeof isCaptureCatch !== 'boolean') {
        isCaptureCatch = false;
    }

    if (isRepeat === undefined || typeof isRepeat !== 'boolean') {
        isRepeat = true;
    }

    if (ele.eventList === undefined) {
        ele.eventList = {};
    }

    if (isRepeat === false) {
        for (var key in ele.eventList)
        {
            if (key === eventType) {
            return '该事件已经绑定过！';
            }
        }
    }

    if (ele.addEventListener) {
        ele.addEventListener(eventType , fn , isCaptureCatch);
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + eventType , fn);
    } else {
        return false;
    }
    ele.eventList[eventType] = true;
}

