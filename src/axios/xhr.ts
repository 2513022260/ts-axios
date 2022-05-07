import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'

export default function (config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers, responseType } = config
    // 1. 创建 XMLHttpRequest 异步对象
    const xhr = new XMLHttpRequest()
    // 2. 配置请求参数
    xhr.open(method.toUpperCase(), url, true)

    Object.keys(headers).forEach(name => {
      // data = null header是没意义的 直接删掉
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      }
      xhr.setRequestHeader(name, headers[name])
    })
    // 有 responseType 配置到 xhr.responseType
    if (responseType) {
      xhr.responseType = responseType
    }

    // 3. 发送请求
    xhr.send(data)
    // 4.注册事件，拿到响应数据
    xhr.onreadystatechange = function handleLoad() {
      if (xhr.readyState !== 4) return

      const responseHeaders = xhr.getAllResponseHeaders()
      const responseData =
        responseType && responseType !== 'text'
          ? xhr.response
          : xhr.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: xhr.status,
        statusText: xhr.statusText,
        headers: responseHeaders,
        config,
        request: xhr
      }

      resolve(response)
    }
  })
}
