function fenToYuan_str (value) { // 小数点
  let str = value ? (parseFloat(value) / 100).toFixed(2) : '0.00'
  let ptr = str.split('.')
  return ptr[0] + '.' + '<span>' + ptr[1] + '</span>'
},
// 获取滚动条当前的位置
function getScrollTop () {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
},
// 获取当前可是范围的高度
function getClientHeight () {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
  } else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
  }
  return clientHeight
},
// 获取文档完整的高度
function getScrollHeight () {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}
