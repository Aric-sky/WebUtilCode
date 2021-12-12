function createId() {
  return (
    (Math.random() * 10000000).toString(16).substr(0, 4) +
    "-" +
    new Date().getTime() +
    "-" +
    Math.random().toString().substr(2, 5)
  );
}
/*随机数范围*/
function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}
/*获取十六进制随机颜色*/
function getRandomColor() {
  return (
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16))
  );
}

module.exports = {
  createId,
  random,
  getRandomColor,
};
