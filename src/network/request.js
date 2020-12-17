import axios from 'axios'

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(config);
    //请求拦截一般会做以下几个事情
    //①.比如config中的一些信息不符合服务器的要求
    //②.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //③.某些网络请求（比如登录(token)），必须携带一些特殊的信息

    //发送请求成功了，以下错误信息不会执行
    //虽然发送成功，但是没有拿到数据，出现error
    //因为在这里把config拦截了，必须把拦截的数据还回去拿到结果
    return config
  }, err => {
    console.log(err);
  })
  //2.2响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    //只需要data信息
    return res.data
  }, err => {
    console.log(err);
  })
  // 3.发送真正的网络请求
  return instance(config)
}

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     //1.创建axios的实例
//     const instance = axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//     //2.发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         resolve(err)
//       })
//   })
// }


// export function request(config,success,failure) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //2.发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

// export function request(config) {
//   //1.创建axios实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //2.发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }
