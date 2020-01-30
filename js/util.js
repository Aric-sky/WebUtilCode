function fenToYuan_str (value) { // 小数点
  let str = value ? (parseFloat(value) / 100).toFixed(2) : '0.00'
  let ptr = str.split('.')
  return ptr[0] + '.' + '<span>' + ptr[1] + '</span>'
}
// 获取滚动条当前的位置
function getScrollTop () {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}
// 获取当前可是范围的高度
function getClientHeight () {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
  } else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
  }
  return clientHeight
}
// 获取文档完整的高度
function getScrollHeight () {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}

// 获取字符串真实长度(中文两个字符,英文一个字符)
function getStrLength (str) {
  if (str == null) return 0
  if (typeof str !== 'string') str += ''
  return str.replace(/[^\x00-\xff]/g, '01').length
}

// javaScript格式化文件大小
function formatFileSize(fileSize) {
    if (fileSize < 1024) {
        return fileSize + 'B';
    } else if (fileSize < (1024*1024)) {
        var temp = fileSize / 1024;
        temp = temp.toFixed(2);
        return temp + 'KB';
    } else if (fileSize < (1024*1024*1024)) {
        var temp = fileSize / (1024*1024);
        temp = temp.toFixed(2);
        return temp + 'MB';
    } else {
        var temp = fileSize / (1024*1024*1024);
        temp = temp.toFixed(2);
        return temp + 'GB';
    }
}

  /*图片加载*/
function imgLoadAll(arr,callback){
  var arrImg = []; 
  for (var i = 0; i < arr.length; i++) {
      var img = new Image();
      img.src = arr[i];
      img.onload = function(){
          arrImg.push(this);
          if (arrImg.length == arr.length) {
              callback && callback();
          }
      }
  }
}

/*音频加载*/
function loadAudio(src, callback) {
  var audio = new Audio(src);
  audio.onloadedmetadata = callback;
  audio.src = src;
}

class OtherFn {

  /*DOM转字符串*/
  domToStirng(htmlDOM){
      var div= document.createElement("div");
      div.appendChild(htmlDOM);
      return div.innerHTML
  }

  /*字符串转DOM*/
  stringToDom(htmlString){
      var div= document.createElement("div");
      div.innerHTML=htmlString;
      return div.children[0];
  }

  /**
   * 光标所在位置插入字符，并设置光标位置
   * 
   * @param {dom} 输入框
   * @param {val} 插入的值
   * @param {posLen} 光标位置处在 插入的值的哪个位置
   */
  setCursorPosition (dom,val,posLen) {
      var cursorPosition = 0;
      if(dom.selectionStart){
          cursorPosition = dom.selectionStart;
      }
      this.insertAtCursor(dom,val);
      dom.focus();
      console.log(posLen)
      dom.setSelectionRange(dom.value.length,cursorPosition + (posLen || val.length));
  }

  /*光标所在位置插入字符*/
  insertAtCursor(dom, val) {
      if (document.selection){
          dom.focus();
          sel = document.selection.createRange();
          sel.text = val;
          sel.select();
      }else if (dom.selectionStart || dom.selectionStart == '0'){
          let startPos = dom.selectionStart;
          let endPos = dom.selectionEnd;
          let restoreTop = dom.scrollTop;
          dom.value = dom.value.substring(0, startPos) + val + dom.value.substring(endPos, dom.value.length);
          if (restoreTop > 0){
              dom.scrollTop = restoreTop;
          }
          dom.focus();
          dom.selectionStart = startPos + val.length;
          dom.selectionEnd = startPos + val.length;
      } else {
          dom.value += val;
          dom.focus();
      }
  }
  /**
   * 浏览器端复制文字内容
   * @param  {String} id [需要粘贴的内容]
   * @param  {String} attr [需要 copy 的属性，默认是 innerText，主要用途例如赋值 a 标签上的 href 链接]
   */
  copyTxt(id, attr) {
    let target = null;

    if (attr) {
        target = document.createElement('div');
        target.id = 'tempTarget';
        target.style.opacity = '0';
        if (id) {
            let curNode = document.querySelector('#' + id);
            target.innerText = curNode.getAttribute(attr)
        } else {
            target.innerText = attr;
        }
        document.body.appendChild(target);
    } else {
        target = document.querySelector('#' + id);
    }

    try {
      let range = document.createRange();
      range.selectNode(target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      console.log('success', '复制成功！')
    } catch (e) {
      console.log('success', '复制失败！')
    }
    if (attr) {
      target.parentElement.removeChild(target);
    }
  }
}

