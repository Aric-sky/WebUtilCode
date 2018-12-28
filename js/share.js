
class Share {
  //share 分享首次判断
  isShare (ykId) {
    var day = this.formatTime(), isShare = this.localGet('isShare');
    if (isShare == null || isShare == undefined) {
      return true;
    }else{
      if(!this.has(isShare, ykId)){
        return true
      } else { 
        if(this.has(isShare[ykId], day)){
          return false
        }else{
          return true
        }
      }
    }
  }

  //share set ,daliy share prove
  shareSet (ykId) {
    var day = this.formatTime()
    this.localSet('isShare', ykId, day)
  }

  formatTime (date) {
    var dateSelf = date || new Date();
    var arr = [dateSelf.getFullYear(), dateSelf.getMonth() + 1, dateSelf.getDate()];
    return arr.join('');
  }

  //设置单个key 导出
  localSet (item,key,val) {
    var dataList = {};
    if (this.localGet(item)) {
      dataList = this.localGet(item);
    }
    if(dataList[key] && this.typeCheck(dataList[key]) === "Array"){
      dataList[key].push(val);
    }else{
      dataList[key] = [val];
    }
    window.localStorage.setItem(item, this.stringly(dataList));
  }

  has (arg, item) {  //true 包含, false 不含
    var type = this.typeCheck(arg);
    if (type === 'object') {
      return arg.hasOwnProperty(item);
    }else if (type === 'Array') {
      if(arg.length > 0 ){
        for(var i= 0, len = arg.length; i< len; i++){
          if(arg[i] == item){
            return true;
          }
        }
        return false;
      }else{
        return false ;
      }
    }
  }

  // 判断数据类型
  typeCheck (obj) {
    var objType = typeof (obj);
    if (objType == "object") {
      if (obj instanceof Array) { // 当为array时
        objType = "Array"
      }
    }
    return objType
  }

  //获得整个item的内容 导出
  localGet (item) {
    return this.parsely(window.localStorage.getItem(item));
  }

  stringly (obj) {
    return JSON.stringify(obj);
  }
  parsely(obj) {
    return JSON.parse(obj);
  }
}