import HTTP from "axios";
export default {
  /**
   * 
   * @param {*} Url 
   * @param {*} method 
   * @param {*} params 
   * @param {*} token 
   */
  request(Url, method, params = {}, token) {
    // 首先判断是get请求还是post请求
    const testUrl = "http://192.168.50.227:8802";
    // const testUrl = "http://192.168.50.78:8802";
    const onlineUrl = "http://47.112.16.168:8802";
    let data = method.toLocaleLowerCase() === "get" ? "params" : "data";
    // let url = onlineUrl + Url;
    let url = testUrl + Url;
    return HTTP({
      method,
      url,
      [data]: params,
      headers: {
        token: token
      }
      // [data]: params, // 差异点在于data的值,
    })
      .then(res => {
        // return Promise.resolve(res.data);
        return res;
        // return resolve(res);
      })
      .catch(err => {
        return err;
      });
  },
  
};
