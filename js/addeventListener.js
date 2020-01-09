// addEventListener兼容写法
export const on = (function() {
  if ( document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})()

class Scroll {
  // pc端滚动开关
  disabledMouseWheel() {
    document.addEventListener('DOMMouseScroll', this.scrollFunc, false)
    document.addEventListener('mousewheel', this.scrollFunc,false)
  }
  cancelDisMouseWheel(){
    document.removeEventListener('DOMMouseScroll', this.scrollFunc,false)
    document.removeEventListener('mousewheel', this.scrollFunc,false)
  }
  scrollFunc(evt) {
    evt = evt || window.event
    if(evt.preventDefault) { // Firefox
      evt.preventDefault()
      evt.stopPropagation()
    } else { // IE
      evt.cancelBubble = true
      evt.returnValue = false
    }
    return false;
  }

  // 移动端touch事件阻止及放开

  mo(e){
    e.preventDefault()
  }
  stop(){
    document.body.className = 'noscroll'
    document.addEventListener("touchmove",this.mo,{ passive: false })
  }
  move(){
    document.body.className = ''
    document.removeEventListener("touchmove",this.mo,{ passive: false })
  }
}

/**
 * dom 需要绑定监听的dom
 * listenerList 监听配置列表 {event: fuc}
 */
const addListener = (dom, listenerList) => {
  let listener = null
  const element = dom || document || window || global;
  
  for (const key in listenerList) {
    listener = new WeakMap();
    listener.set(element, listenerList[key]);
    element.addEventListener(key, listener.get(element), false);
  }
}
