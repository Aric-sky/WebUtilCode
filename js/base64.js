// 同步方法获取图片base64
componentDidMount = async () => {
  const imgList = [
    "https://img.alicdn.com/tfs/TB1dOkvyUT1gK0jSZFrXXcNCXXa-1440-678.png",
    "https://img.alicdn.com/tfs/TB1dOkvyUT1gK0jSZFrXXcNCXXa-1440-678.png",
    "https://img.alicdn.com/tfs/TB1mWEoMeL2gK0jSZPhXXahvXXa-1920-1080.png",
    "https://img.alicdn.com/tfs/TB1E0teFBr0gK0jSZFnXXbRRXXa-172-172.png"
  ];
  const chronList = imgList.map(val => {
    return this.getBase64(val)
  })
  const res = await Promise.all(chronList)
  console.log("rrrrr", res);
};

getBase64 = url => {
  return new Promise((resolve, reject) => {
    const Img = new Image();
    let dataURL = "";
    Img.src = url + "?v=" + Math.random();
    Img.setAttribute("crossOrigin", "Anonymous");
    Img.onload = function() {
      var canvas = document.createElement("canvas");
      const width = Img.width;
      const height = Img.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(Img, 0, 0, width, height);
      dataURL = canvas.toDataURL("image/jpeg");
      resolve(dataURL);
    };
    Img.onerror = err => {
      reject(err);
    };
  });
};
// 去掉不需要的前缀
removePrefix = (str) => {
  return str.replace(/^data:image\/\w+;base64,/, "")
}