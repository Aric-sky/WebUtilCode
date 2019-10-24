## 各项功能介绍

### RequestAnimationFrame.js
各个浏览器的requestAnimationFrame的api兼容版本；


### URL.js 
url操作系列方法

方法名 | 能力 
--- | --- 
setUrlParam | 设置url查询参数 
serialize | 查询参数 obj => string
parse_url | 获得url中的查询参数对象，返回object
getQueryString | 获得URL中的指定参数


### addeventListener.js

方法名 | 能力 
--- | --- 
on | 绑定事件监听
Scroll | 滚动监听
addListener | map方式绑定监听

### type.js
数据类型检测、浏览器类型检测、字符串正则验证


### 推荐
- 获取浏览器 userAgent包 =>
[ua-parser-js](https://www.npmjs.com/package/ua-parser-js)



## 奇淫技巧

```
10 >>> 1 // 5 取中值
13.93 >>> 0 // 13 舍去余数


```
