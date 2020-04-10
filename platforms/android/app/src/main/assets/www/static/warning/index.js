export default {
//    已处理
Processed(res,e){
    var arr = [];
    for (let index = 0; index < res.length; index++) {
        var status = res[index].warningStatus;
        if (status === e) {
            arr.push(res[index]);
        } 
    }
    return arr;
}
};