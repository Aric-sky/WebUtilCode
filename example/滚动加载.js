window.onscroll = function () {
  if (this.getScrollTop() + this.getClientHeight() >= this.getScrollHeight()) {
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

// 获取滚动条当前的位置
function getScrollTop() {
  let scrollTop = 0
  let ele = document.documentElement
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
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}