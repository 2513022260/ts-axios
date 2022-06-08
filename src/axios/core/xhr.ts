import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'

export default function (config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const {
      url,
      method = 'get',
      data = null,
      headers,
      responseType,
      timeout
    } = config
    // 1. 创建 XMLHttpRequest 异步对象
    const xhr = new XMLHttpRequest()
    // 2. 配置请求参数
    xhr.open(method.toUpperCase(), url!, true)

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
    // 有 timeout 配置到 xhr.timeout
    if (timeout) {
      xhr.timeout = timeout
    }
    // 3. 发送请求
    xhr.send(data)
    // 5 处理异常
    // 5.1 网络错误事件
    xhr.onerror = function () {
      reject(createError('Net Error', config, null, xhr))
    }
    // 5.2 超时 timeout
    xhr.ontimeout = function () {
      reject(
        createError(`Timeout of ${timeout} ms exceeded`, config, 'TIMEOUT', xhr)
      )
    }
    // 4.注册事件，拿到响应数据
    xhr.onreadystatechange = function handleLoad() {
      if (xhr.readyState !== 4) return
      // 5.3 网络错误或者超时错误
      if (xhr.status === 0) return

      const responseHeaders = parseHeaders(xhr.getAllResponseHeaders())
      // const responseHeaders = xhr.getAllResponseHeaders()
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
      // 5.4 状态码判断
      handleResponse(response)
    }

    function handleResponse(response: AxiosResponse): void {
      if (response.status >= 200 && response.status < 300) {
        resolve(response)
      } else {
        reject(
          createError(
            `Request failed with status code ${response.status}`,
            config,
            xhr.status,
            xhr,
            response
          )
        )
      }
    }
  })
}
