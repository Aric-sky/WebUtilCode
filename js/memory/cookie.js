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

