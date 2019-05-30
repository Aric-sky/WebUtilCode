
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
    return url + '?' + serialize(obj)
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




