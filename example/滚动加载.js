window.onscroll = function () {
  var id = "box" // 滚动容器id
  if (this.getScrollTop(id) + this.getClientHeight() >= this.getScrollHeight()) {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(() => {
      console.log('进来了')
      // 接口没有在pending
      if (!this.recordLoading) {
        // 请求接口
      } else {
        return
      }
    }, 100)
  }
}

// 获取容器的滚动距离
function getScrollTop(id) {
  let scrollTop = 0
  let ele = document.getElementById(id)
  if (ele && ele.scrollTop) {
    scrollTop = ele.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}
// 获取当前可是范围的高度
function getClientHeight() {
  let clientHeight = 0
  let dbody = document.body
  let ele = document.documentElement
  if (dbody.clientHeight && ele.clientHeight) {
    clientHeight = Math.min(dbody.clientHeight, ele.clientHeight)
  } else {
    clientHeight = Math.max(dbody.clientHeight, ele.clientHeight)
  }
  return clientHeight
}
// 获取文档完整的高度
function getScrollHeight() {
  // 方法一：这种方法可能只能拿到可视区域的高度，非整个文档的高度
  // return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  // 方法二： 增加标志节点div，放在整个文档的最下面，以此来获取文档高度
  return document.getElementById("mark").offsetTop
}
