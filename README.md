
## 程序员成长之路

[<img src="https://img.shields.io/badge/思否-2.5k-42b983.svg">](https://segmentfault.com/u/wangyuanqi)


### 个人网站: [http://www.wangyuanqi.com](http://www.wangyuanqi.com)
### 学习文档: [http://www.wangyuanqi.com/book](http://www.wangyuanqi.com/book)
### 博客: [http://blog.wangyuanqi.com/](http://blog.wangyuanqi.com/)


## javascript 总结（常用工具类的封装）

#### addeventListener.js 
```
on // 返回一个事件监听函数，兼容IE；可理解为addeventListener的兼容版本
Scroll类 // PC端滚动事件绑定方法合集
addListener(dom, listenerList) // 用WeakMap绑定监听的方法
```

#### ajax.js 
使用原生方法封装的xhr请求

#### axios.js
封装axios的get、post方法

#### array.js  数组操作常用方法
ArrayFn 类:

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

#### date-time.js
DateFn类，时间格式化
```
formatTime  // @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
getMonths   // 返回指定长度的月份集合
getDays     // 返回指定长度的天数集合
formatHMS       // @example formatHMS(3610) // -> 1h0m10s
getMonthOfDay   // 获取某月有多少天
getYearOfDay    // 获取某年有多少天
getFirstDayOfYear   // 获取某年的第一天
getLastDayOfYear    // 获取某年最后一天
getDayOfYear    // 获取某个日期是当年中的第几天
getDayOfYearWeek    // 获取某个日期在这一年的第几周
timeFuc     // 计算时间差
```


#### dom.js 对原生方法的封装
DomFn类，原生方法实现查找，类名替换，节点获取功能，使用方法同jQuery，更轻量。
```
$       // 获取节点
hasClass    // 检测类名
addClass    // 添加类名
removeClass     // 删除类名
replaceClass        // 替换类名
siblings        // 获取兄弟节点
getByStyle      // 获取行间样式属性
createDom       // 生成dom元素
```

#### fetch.js
http类，对whatwg-fetch包的封装，用于http请求


#### fun.js
once    // 限制方法只调用一次


#### number.js

```
toDecimal2(x)       // 只保留2位小数
numberToChinese     // 将阿拉伯数字翻译成中文的大写数字
changeToChinese     // 将数字转换为大写金额
```

#### random.js

```
createId        // 获取随机ID
random(min, max)    // 获取随机数
getRandomColor      // 获取十六进制随机颜色
```

#### requestAnimationFrame.js
requestAnimationFrame API 浏览器兼容方案

#### share.js 
分享功能相关存储、判断方法

#### sort.js
排序大法好：三大排序: 冒泡，插入，快速


#### type.js
```
checkPrototype      // 检测变量类型
isFalse             // 判断是否为false
isIos           // 判断是否为ios
isPC        // 判断是否是pc
isMobile        // 判断是否为mobile
browserType     // 浏览器类型检测
browserTypeHasVersion       // 检测浏览器类型包含版本号
checkStr        // 判断字符串格式
```

#### URL.js
```
setUrlParam(key, value)     // 设置url查询参数
serialize       // 格式化查询参数 obj => string
parse_url       // 获得url中的查询参数对象，返回object
getQueryString      // 获得URL中的指定参数
getUrlAllParams     // 获取全部url参数,并转换成json对象
delParamsUrl        // 删除url指定参数，返回url
```



```
/*                     _ooOoo_
 *                    o8888888o
 *                    88" . "88
 *                    (| -_- |)
 *                    O\  =  /O
 *                 ____/`---'\____
 *               .'  \\|     |//  `.
 *              /  \\|||  :  |||//  \
 *             /  _||||| -:- |||||-  \
 *             |   | \\\  -  /// |   |
 *             | \_|  ''\---/''  |   |
 *             \  .-\__  `-`  ___/-. /
 *           ___`. .'  /--.--\  `. . __
 *        ."" '<  `.___\_<|>_/___.'  >'"".
 *       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *       \  \ `-.   \_ __\ /__ _/   .-` /  /
 *  ======`-.____`-.___\_____/___.-`____.-'======
 *                     ‘=---=’
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *             佛祖保佑       永无BUG
 *
 */
```


