export default{
    filter (value) {
        //debugger
        //console.log("====",value);
       if(typeof value== "number"){
           return value.toFixed(3)
       }else{
           return value
       }
    }
};