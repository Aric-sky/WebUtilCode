
## 程序员成长之路

[<img src="https://img.shields.io/badge/思否-2.5k-42b983.svg">](https://segmentfault.com/u/wangyuanqi)


### 个人网站: [http://www.wangyuanqi.com](http://www.wangyuanqi.com)
### 学习文档: [http://www.wangyuanqi.com/book](http://www.wangyuanqi.com/book)
### 博客: [http://blog.wangyuanqi.com/](http://blog.wangyuanqi.com/)


### javascript 总结（常用工具类的封装）

#### RequestAnimationFrame.js 
- 兼容各个浏览器环境的requestAnimationFrame API
#### URL.js
- setUrlParam(key, value)   // 设置url查询参数
- serialize(obj)   // 格式化查询参数 obj => string
- parse_url(url)  // 获得url中的查询参数对象，返回object
- getQueryString(name)  // 获得URL中的指定参数

#### addeventListener.js 
方法名 | 能力 
--- | --- 
on | 返回一个事件监听函数，兼容IE；可理解为addeventListener的兼容版本
Scroll类 | PC端滚动事件绑定方法合集
addListener(dom, listenerList) | 用WeakMap绑定监听的方法

#### array.js  数组操作常用方法
- ArrayFn 类

```
    contains /*判断一个元素是否在数组中*/
    each、map // 遍历数组
    sort    // 排序
    unique /*去重*/
    union  /*求两个集合的并集*/
    intersect /*求两个集合的交集*/
    remove /*删除其中一个元素*/
    formArray  /*将类数组转换为数组的方法*/
    max     /*最大值*/
    min      /*最小值*/
    sum     /*求和*/
    average      /*平均值*/
    average  /*扁平化*/
```

---


#### type.js 检测数据类型；
- isIos；
- isPC；browserType浏览器类型；
- checkStr 常用字符串验证

#### string.js 
- 去空格升级版；大小写转换；检测密码强度；过滤html代码(把<>转换)
#### storage.js 本地数据存储cookie；session；localstorage
#### fetch.js
#### ajax.js 使用原生方法封装的xhr请求
#### dom.js 对原生方法的封装
- 实现查找，类名替换，节点获取
