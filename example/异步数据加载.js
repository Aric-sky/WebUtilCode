function loadImgs(imgList){
    let proList = [];
    for(var i=0; i<imgList.length; i++ ){
        let pro = new Promise((resolve, reject) => {
            let img = new Image();
            img.onload = function(){
                resolve(img)
            }
            img.src = imgList[i];
        })
        proList.push(pro)
    }

    return Promise.all(proList)
            .then( (rs)=>{
                console.log("finish all");
                return Promise.resolve(rs);
            })
}

async function entry(imgList, cb) {
    try {
        let rs = await loadImgs(imgList);
        cb(rs);
    } catch(err) {
        console.log(err)
        cb([])
    }

}

var imgUrlList = [
    "http://111.231.236.41/vipstyle/cartoon/v4/release/pic/index/recomment-single-s3.png",
    "http://111.231.236.41/vipstyle/cartoon/v4/release/pic/index/recomment-single-s2.png"
]
entry(imgUrlList, function(rs){
    console.log("开始干活")
    console.log(rs)
})
