
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

// 查询参数 obj => string
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
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
} 


