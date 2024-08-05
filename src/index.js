
// You should implement your task here.

module.exports = function towelSort (matrix) {

var result= []

    var cnt=0;
    for (var i in matrix) {
        var tmp=[]
    if (cnt %2 ==0){
        tmp = matrix.at(i);
        }
    else {
        tmp = matrix.at(i).reverse();
    }
    cnt ++;
    
    for( var j in tmp) {
        result.push(tmp.at(j));
    }
}
  return result;
}
