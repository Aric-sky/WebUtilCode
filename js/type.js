/* //////////////////////////////判断操作///////////////////////////////////*/
module.exports = {
    /**@param   o       检测参数
     * @return
     * 'String'        是否字符串
     * 'Number'        是否数字
     * 'Object'         是否对象
     * 'Array'          是否数组
     * 'Date'           是否时间
     * 'Boolean'        是否boolean
     * 'Function'       是否函数
     * 'Null'           是否为null
     * 'Undefined'      是否undefined
     */
    checkPrototype (o){
        return Object.prototype.toString.call(o).slice(8, -1)
    },

    isFalse (o) {
        if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) return true
        return false
    },

    isTrue (o) {
        return !this.isFalse(o)
    },

    isIos () {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
            // return "Android";
            return false
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            // return "iPhone";
            return true
        } else if (u.indexOf('iPad') > -1) {//iPad
            // return "iPad";
            return false
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
            // return "Windows Phone";
            return false
        }else{
            return false
        }
    },

    isPC () { //是否为PC端
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    },

    isMobile () { // 判断是否为移动端
        return /applewebkit.*mobile.*/.test(window.navigator.userAgent.toLowerCase())
    },

    browserType(){
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isEdge = userAgent.indexOf("Edge") > -1; //判断是否IE的Edge浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
        var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器
        if (isIE) {
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            if(fIEVersion == 7) return "IE7"
            else if(fIEVersion == 8) return "IE8";
            else if(fIEVersion == 9) return "IE9";
            else if(fIEVersion == 10) return "IE10";
            else if(fIEVersion == 11) return "IE11";
            else return "IE7以下"//IE版本过低
        }

        if (isFF) return "FF";
        if (isOpera) return "Opera";
        if (isEdge) return "Edge";
        if (isSafari) return "Safari";
        if (isChrome) return "Chrome";
    },
    browserTypeHasVersion (userAgent) {
      var sys = {};
      var ua = navigator.userAgent.toLowerCase();
      var s;
      (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
      (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
      (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
      (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
      (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
      (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
      (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

      if (sys.edge) return { broswer : "Edge", version : sys.edge };
      if (sys.ie) return { broswer : "IE", version : sys.ie };
      if (sys.firefox) return { broswer : "Firefox", version : sys.firefox };
      if (sys.chrome) return { broswer : "Chrome", version : sys.chrome };
      if (sys.opera) return { broswer : "Opera", version : sys.opera };
      if (sys.safari) return { broswer : "Safari", version : sys.safari };
      
      return { broswer : "", version : "0" };
    },
    checkStr (str, type) {
        switch (type) {
            case 'phone':   //手机号码
                return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
            case 'tel':     //座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
            case 'card':    //身份证
                return /^\d{15}|\d{18}$/.test(str);
            case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                return /^[a-zA-Z]\w{5,17}$/.test(str)
            case 'postal':  //邮政编码
                return /[1-9]\d{5}(?!\d)/.test(str);
            case 'QQ':      //QQ号
                return /^[1-9][0-9]{4,9}$/.test(str);
            case 'email':   //邮箱
                return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(str);
            case 'money':   //金额(小数点2位)
                return /^\d*(?:\.\d{0,2})?$/.test(str);
            case 'URL':     //网址
                return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
            case 'IP':      //IP
                return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
            case 'date':    //日期时间
                return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
            case 'number':  //数字
                return /^[0-9]$/.test(str);
            case 'english': //英文
                return /^[a-zA-Z]+$/.test(str);
            case 'chinese': //中文
                return /^[\u4E00-\u9FA5]+$/.test(str);
            case 'lower':   //小写
                return /^[a-z]+$/.test(str);
            case 'upper':   //大写
                return /^[A-Z]+$/.test(str);
            case 'HTML':    //HTML标记
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
            default:
                return true;
        }
    },
    //判断设备是Pc还是mobile
    browserRedirect () {
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
    },
    
}
