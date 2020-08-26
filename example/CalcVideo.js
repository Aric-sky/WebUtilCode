/**
 * @param file 文件流
 * 格式如: {
 *  lastModified: 1565170652842
 *  lastModifiedDate: Wed Aug 07 2019 17:37:32 GMT+0800 (中国标准时间) {}
 *  name: "Dunhuang Y [Full HD 1080p].mp4"
 *  size: 35935847
 *  type: "video/mp4"
 *  webkitRelativePath: ""
 * 适配信息
 * @param fileNum 想要返回的视频大小 {1: "KB", 2: "MB", 3: "GB", 4: "TB"}
 * @return Object  {duration, fileSize, type, width, height}
 * }
 */
class CalcVideo {
    constructor (file, fileNum) {
  
      this.video = document.createElement('video')
      this.video.preload = 'metadata'
      this.video.src = URL.createObjectURL(file)
  
      return this.init(file, fileNum)
  
    }
    init (file, fileNum) {
      return new Promise((resolve, reject) => {
        let {fileSize, level} = this.fileLengthFormat(file.size, fileNum)
        // 文件类型限制
        let type = this.getFileType(file.name)
        if (type === 'mp4') {
            // 时长
            this.video.onloadedmetadata = () => {
              window.URL.revokeObjectURL(this.video.src);
              var duration = this.video.duration;
              resolve({
                fileSize,
                duration,
                type,
                height: this.video.videoHeight,
                width: this.video.videoWidth,
                level
              })
            }
        } else {
            resolve({
              fileSize,
              duration: 0,
              type,
              height: this.video.videoHeight,
              width: this.video.videoWidth,
            })
        }
      })
    }
    getFileType = (fileName) => {
      var exts = fileName.split('.');
      var ext = "";
      if (exts != undefined) {
          if (exts.length <= 1 && fileName.indexOf('=')>-1) {//直接输入上传到azure之后生成的文件地址
              console.log('输入是文件地址：', exts);
              return false
          } else {
              ext = exts[exts.length - 1];
              ext = ext.toLowerCase();
              return ext        
          }
      } else {
        return false
      }
    }
    /**
     * [fileLengthFormat 格式化文件大小]
     * @param  {[int]} total [文件大小] Byte
     * @param  {[int]} n {1: "KB", 2: "MB", 3: "GB", 4: "TB"}
     * @return {[string]}       [带单位的文件大小的字符串]
     */
    fileLengthFormat(total, n) {
      var format;
      var len = total / (1024.0);
      if (len > 1000) {
          return this.fileLengthFormat(len, ++n)
      } else {
          switch (n) {
              case 1:
                  format = len.toFixed(2)
                  break;
              case 2:
                  format = len.toFixed(2)
                  break;
              case 3:
                  format = len.toFixed(2)
                  break;
              case 4:
                  format = len.toFixed(2)
                  break;
          }
          return {fileSize: +format, level: n};
      }
    }
  }
  
  export default CalcVideo
  
