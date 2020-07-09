
// 设置url查询参数
export const setUrlParam = (key, value) => {  
  const { origin, pathname, search } = window.location;
  let url = origin + pathname
  if (search) {
    let obj = parse_url(location.href)
    if (search.indexOf(key) > -1) {
      if (value === null) {
        delete obj[key]
      }
    } else {
      obj[key] = value
    }
    let paramSearch = serialize(obj)
    return url + paramSearch ? ('?' + paramSearch) : ''
  } else {
    return url + '?' + key + '=' + value
  }
}

// 格式化查询参数 obj => string
const serialize = (obj) => {
   var str = [];
   for (var p in obj)
    if (obj.hasOwnProperty(p)) {
     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
   return str.join("&");
}

// 获得url中的查询参数对象，返回object
const parse_url = (url) => {
  var pattern = /(\w+)=(\w+)/ig;
  var parames = {};
  url.replace(pattern, function(a, b, c){
  parames[b] = c;
  });
  return parames;
}

// 获得URL中的指定参数
// 注：若是 window.location.search 拿不到数据，此方法不适用
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 
// 可替代 getQueryString 方法
const getParamByParse = (name) => {
  var url = window.location.href
  var pattern = /(\w+)=(\w+)/ig;
  var parames = {};
  url.replace(pattern, function(a, b, c){
  parames[b] = c;
  });
  return parames[name] || null;
}

/*获取全部url参数,并转换成json对象*/
function getUrlAllParams (url) {
  var url = url ? url : window.location.href;
  var _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};
  for (var i = 0, _len = _arrS.length; i < _len; i++) {
      var pos = _arrS[i].indexOf('=');
      if (pos == -1) {
          continue;
      }
      var name = _arrS[i].substring(0, pos),
          value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
      _rs[name] = value;
  }
  return _rs;
}


/*删除url指定参数，返回url*/
function delParamsUrl(url, name){
  var baseUrl = url.split('?')[0] + '?';
  var query = url.split('?')[1];
  if (query.indexOf(name)>-1) {
      var obj = {}
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].split("=");
          obj[arr[i][0]] = arr[i][1];
      };
      delete obj[name];
      var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
      return url
  }else{
      return url;
  }
}

