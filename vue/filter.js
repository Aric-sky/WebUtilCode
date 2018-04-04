import Vue from 'vue'
/**
 * 毫秒值 转换成 年月日
 * @param  {Date}   value) {               let time [description]
 * @return {[type]}        [description]
 */
Vue.filter('time-formater-no-hour', (value) => {
  if (!value || value === '') {
    return ''
  }
  // 返回处理后的值
  let time = new Date(parseInt(value))
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  return year + '-' + month + '-' + day
})

// 少于50 ：0<=数据<50
// 50-100人 : 50<=数据<100
// 150-500人 : 150<=数据<500
// 500-1000人 : 500<=数据<1000
// 1000人+ : 1000<=数据
Vue.filter('companySize', (value) => {
  if (!value || value === '') {
    return '-'
  } else if (value >= 0 && value < 50) {
    return '少于50人'
  } else if (value >= 50 && value < 100) {
    return '50-100人'
  } else if (value >= 100 && value < 150) {
    return '100-150人'
  } else if (value >= 150 && value < 500) {
    return '150-500人'
  } else if (value >= 500 && value < 1000) {
    return '500-1000人'
  } else {
    return '1000人+'
  }
})
/**
 * 阶段
 */
Vue.filter('stageFilter', (value) => {
  var obj = {
    following: '跟进',
    won: '成功',
    potential: '潜在',
    intention: '意向',
    failed: '失败',
    demo: '样品'
  }
  return (obj[value] || '未知阶段')
})

/**
 * 毫秒值 转换成 年月日 时分
 * @param  {Date}   value) {               let time [description]
 * @return {[type]}        [description]
 */
Vue.filter('time-formater-has-hour', (value) => {
  // 返回处理后的值
  let time = new Date(value)
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  let second = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
})
Vue.filter('time-formater-no-second', (value) => {
  // 返回处理后的值
  let time = new Date(value)
  let year = time.getFullYear()
  let month = (time.getMonth() < 9 ? '0' : '') + (time.getMonth() + 1)
  let day = (time.getDate() < 10 ? '0' : '') + time.getDate()
  let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':00'
})
/**
 * 时间戳 转换成 时分秒
 */
Vue.filter('time-formater-only-hour', (value) => {
  let time = new Date(value)
  let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  let second = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
  return hour + ':' + minute + ':' + second
})
/**
 * 时间戳 转换成 时分
 */
Vue.filter('time-formater-only-hourminute', (value) => {
  let time = new Date(value)
  let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  return hour + ':' + minute
})
/**
 * 秒 转换成 时分
 */
Vue.filter('time-formater-second-hour', (value) => {
  var h = Math.floor(value / 3600)
  var m = Math.floor((value / 60 % 60))
  var s = Math.floor((value % 60))
  return h + ':' + m + ':' + s
  // let time = new Date(value * 1000)
  // let hour = (time.getHours() < 10 ? '0' : '') + time.getHours()
  // let minute = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes()
  // let second = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds()
  // return hour + ':' + minute + ':' + second
})
/**
 * 分 转换成 元
 * @param  {String}   value)
 * @return {[String]}        [description]
 */
Vue.filter('fenToYuan', (value) => {
  return (parseFloat(value) / 100).toFixed(2)
})
/**
 * 把单位中文转换成英文
 * @return {[type]} [description]
 */
// 日期单位
Vue.filter('dayUnitEn', (value) => {
  let map = {'2': 'Day', '0': 'Week', '1': 'Month'}
  return map[value]
})
// 商品单位
Vue.filter('prodUnitEn', (value) => {
// console.log(value, _this.produnits)
// let en = ''
// for (let item of _this.produnits) {
//   // console.log(item.id)
//   if (item.productUnitEn === value) {
//     en = item.productUnitEn
//     break
//   }
// }
  return value
})

Vue.filter('search-target', (value, searchText, textClass) => {
  function replaceReg (reg, str) {
    return str.replace(reg, (m) => {
      return '<span class="' + textClass + '">' + m + '</span>'
    })
  }
  let strRegex = '' + searchText
  let regex = new RegExp(strRegex, 'gi')
  value = replaceReg(regex, value)
  return value
})
Vue.filter('html-to-str', (value) => {
  if (value !== '' && value !== null) {
    return value.replace(/<[^>]+>/g, '')
  } else {
    return ''
  }
})
