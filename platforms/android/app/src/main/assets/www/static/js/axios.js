/**
 *请求封装
 */
import axios from 'axios'
import { getToken } from '@/utils/auth'
 //export const BaseUrl = 'http://192.168.0.126:8880'// 公用api部分
// export const BaseUrl = 'http://192.168.0.122:8880'// 线上服务器api部分 
export const BaseUrl = 'http://192.168.50.152:8802'// 后台本机
// export const BaseUrl = 'http://192.168.0.104:8881'// 后台本机
// export const BaseUrl = 'http://192.168.0.108:8881'// 后台本机
// export const BaseUrl = 'http://192.168.0.113:8881'// 后台本机

const instance = axios.create({
  baseURL: BaseUrl,
  timeout: 10 * 60 * 1000
  // withCredentials: true 
})




// request拦截 
// instance.interceptors.request.use(config => {
//   console.log(config)
//   let token1 = Cookies.get('JESSIONID')//返回试试
//   console.log(token1)
//   let token2 = Cookies.get('Admin-Token') //
//   let token = token1 + token2
//     console.log(Cookies)
//     // 1. 请求开始的时候可以结合 vuex 开启全屏 loading 动画
//     // console.log(store.state.loading)
//     // console.log('准备发送请求...')
//     // 2. 带上token  
//     if (token2) {
//       config.headers.Authorization = token2
//     }
//   return config
// }, err => {
//   return Promise.reject(err)
// })





const Ajax = {
  post(url, params, headers) {
    return instance({
      method: 'POST',
      url,
      data: params,
      headers
    })
  },

  put(url, params, headers) {
    return instance({
      method: 'PUT',
      url,
      data: params,
      headers
    })
  },

  postWithURLencoded(url, params, headers) {
    return Ajax.post(url, params, {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    })
  },




  postWithFormData(url, params, headers) {//post不带token的上传文件请求
    return Ajax.post(url, params, { 
      // headers,  
      // //  'Content-Type': 'application/form-data'
      // 'Content-Type': 'multipart/form-data' 
    })
  },

  postWithFormDataToken(url, data, headers) { //post带token 上传文件请求
    var token = getToken();
       return Ajax.post(url, data, {
        'AUTHENTICATION': token
      })
    },
  get(url, params) {//常规get带token请求
    var token = getToken();
    return instance({
      method: 'GET',
      url,
      params,
      headers:{
        'AUTHENTICATION': token
      }
    })
  },

  postToken(url, data) {//常规post 带token请求
    var token = getToken();
    return instance({
      method: 'POST',
      url,
      data,
      headers:{
        'AUTHENTICATION': token
      }
    })
  },


  postTokenParams(url, params) {
    var token = getToken();
    return instance({
      method: 'POST',
      url,
      params,
      headers:{
        'AUTHENTICATION': token
      }
    })
  },

  deleteRow(url, params) {
    return instance({
      method: 'DELETE',
      url,
      params
    })
  },

  // deleteRow(url, params) {
  //   return Ajax.post(url, {
  //     ...params,
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8'
  //     }
  //   })
  // },

  async handleRequest(request, isNeedSuccessTip = false, isNeedErrorTip = false) {
    const responseData = await request()
    // console.log(responseData)
    if (!responseData) return false
    return responseData
    // eslint-disable-next-line
    // const { data, meta, i18n_code } = responseData.data
    // if (!meta) return false
    // const { success, code, params } = meta
    // if (!success && !isNeedErrorTip) {
    //   // if (meta.code !== 500 && !store.state.user.isTokenDisable) {
    //   if (code !== 500) {
    //     _self.$message({
    //       type: 'error',
    //       // eslint-disable-next-line
    //       message: (!params || !params.length) ? _self.$t(`${i18n_code}`) : this.stringFormat(_self.$t(`${i18n_code}`), params)
    //       // _self.$t(`M.${i18n_code}`).format(params)
    //     })
    //   }
    //   switch (code) {
    //     case 401:
    //       // store.commit('USER_LOGOUT')
    //       // store.commit('CHANGE_TOKEN_AVAILABILITY', true)
    //       _self.$router.push({ path: '/login' })
    //       break
    //     case 500:
    //       _self.$router.push({ path: '/500' })
    //       break
    //   }
    //   return false
    // } else {
    //   if (isNeedSuccessTip) {
    //     _self.$message({
    //       type: 'success',
    //       // eslint-disable-next-line
    //       message: _self.$t(`${i18n_code}`)
    //     })
    //   }
    //   return data || {}
    // }
  }
}
// export const   deleteMethod = (url, params) => {
//   return util.ajax({ //
//     data:params,
//     url,
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json; charset=UTF-8'
//     }
//   })
// }
export default Ajax
