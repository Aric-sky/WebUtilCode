//三大排序: 冒泡，插入，快速
var arr=[4,1,3,5,2,7,6]
// 冒泡排序
var examplearr=[8,94,15,88,55,76,21,39]
function sortarr(arr){
  for(i=0; i<arr.length-1; i++){
    for(j=0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
        var temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
      }
    }
  }
  return arr
}
sortarr(examplearr)
console.log(examplearr)

//插入排序
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var t=arr[i]
    var p=i-1
    while(p>=0&&arr[p]>t){
      arr[p+1]=arr[p]
      p--
    }
    arr[p+1]=t
  }
}
//insertSort(arr)
//快速排序:
function quickSort(arr){
  if(arr.length>1){
    var c=parseInt((arr.length+1)/2)
    var center=arr.splice(c,1)[0]
    var left=[],right=[]
    for(var i=0;i<arr.length;i++){
      if(arr[i]<center) left.push(arr[i])
      else right.push(arr[i])
    }
    return quickSort(left).concat(center,quickSort(right));
  }else
    return arr;
}
arr=quickSort(arr)
console.log(String(arr))