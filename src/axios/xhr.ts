import { AxiosRequestConfig } from './types'

export default function (config: AxiosRequestConfig) {
  const { url, method = 'get', data = null, headers } = config

  const xhr = new XMLHttpRequest()
  xhr.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach(name => {
    // data = null header是没意义的 直接删掉
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    }
    xhr.setRequestHeader(name, headers[name])
  })

  xhr.send(data)
}
