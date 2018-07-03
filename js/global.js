import Cookie from 'js-cookie'
var isNode = typeof window === 'undefined'; //判断是否服务端渲染

//判断浏览器是否处于无痕浏览模式
export const isLocalStorageSupported = () => {
    if (isNode) return;
    try {
        localStorage.setItem('isPrivateMode', '1');
        localStorage.removeItem('isPrivateMode');
        return true;
    } catch (error) {
        return false;
    }
};

export const setToken = (name, data) => {
    if (isNode) return;
    localStorage.setItem(name, data);
    Cookie.set(name, data)
};
export const getCookie = (name) => {
    if (isNode) return;
    return localStorage.getItem(name) || Cookie.get(name) ;
};

export const removeToken = (name) => {
    if (isNode) return;
    Cookie.remove(name);
    localStorage.removeItem(name);
};

//获取服务端的token
export const getStorageToken = (str) => {
    if (isNode) return;
    let headerStorage = str.split(';');
    let token;
    for(let i=0;i<headerStorage.length;i++){
        if(headerStorage[i].indexOf('token')>-1){
            token = headerStorage[i].split('=')[1]
        }
    }
    return token
};

// 检查用户是否登录
export const checkLoginStatus = () => {
    if (isNode) return;
    // let logined = getCookie("logined");
    let logined = localStorage.getItem("logined");
    if (logined == 1 ) return true;
    return false;
};

export const getDate = (date) => {
    var Year = date.getFullYear() + '-';
    var Month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    var Day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return (Year + Month + Day)
};

export const getNewDate = (date) => {
    var Year = date.getFullYear();
    var Month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + ' / ';
    var Day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' / ';
    return (Day + Month + Year)
};

export const getUserFromCookie = (req, name) => {
    if (isNode) {
        if (!req.headers.cookie) return;
        const Cookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(name + '='));
        if (!Cookie) return;
        const cookie = Cookie.split('=')[1];
        return cookie
    } else {
        return getCookie(name);
    }
};

export const browserType = (from) => {
    var explorer = from.toLowerCase();
    //ie
    var isIe9 = false;
    if (explorer.indexOf("msie") >= 0) {
        var ver = parseFloat(explorer.match(/msie ([\d.]+)/)[1]);
        if (ver <= 9.0) {
            isIe9 = true;
        }
    }
    return isIe9;
};

export const ieBrowser = (from) => {
    var explorer = from.toLowerCase();
    var isIe = false;
    if (explorer.indexOf("msie") >= 0 || explorer.indexOf("rv:11") > -1) {
        isIe = true;
    }
    return isIe;
};

//制保留2位小数，如：2，会在2后面补上00.即2.00
export const toDecimal2 = (x) => {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return '';
    }
    var f = Math.round(x * 100) / 100;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 2) {
        s += '0';
    }
    return s;
};

//获取url参数
export const getParam = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
};

//获取url最后一个/后面的字符串
export const getLastParam = (url) => {
    let str = url.substring(url.lastIndexOf("/")).split('?')[0];
    return str;
};

export const isEmail = (str) => {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    return reg.test(str);
};

//判断设备是Pc还是mobile
export const browserRedirect = () => {
    if (isNode) return;
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return 'mobile';
    } else {
        return 'pc';
    }
};

//判断字符串的字符长度（中文占两个字符）

export const strLength = (str) => {
    let len = str.replace(/[^\x00-\xff]/g,"**").length;
    return len;
};

/**
 * Unicode 转换 ASCII
 *
 * @param str
 * @returns {*}
 */
function unicodeToAsicc(str) {
    var code = str.match(/&#(\d+);/g);
    if (code == null) {
        return str;
    }

    for (var i = 0; i < code.length; i++) {
        str = str.replace(code[i], String.fromCharCode(code[i].replace(/[&#;]/g, '')))
    }

    return str;
}

/**
 * 在html中显示spec
 *
 * @param str
 * @returns {string}
 */
export const showSpecCode = (str) => {
    str = unicodeToAsicc(str);
    return str;
}
