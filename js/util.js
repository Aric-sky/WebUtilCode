function fenToYuan_str (value) { // 小数点
  let str = value ? (parseFloat(value) / 100).toFixed(2) : '0.00'
  let ptr = str.split('.')
  return ptr[0] + '.' + '<span>' + ptr[1] + '</span>'
}