import xhr from './xhr'
import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'

export default function Axios(config: AxiosRequestConfig): AxiosPromise  {
  processCofing(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 用来处理config
function processCofing(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
  config.headers = transformHeaders(config)
}
// 用来处理url
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}
// 用来处理请求data
function transformRequestData(config: AxiosRequestConfig): any {
  const { data } = config
  return transformRequest(data)
}
// 用来处理headers
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
// 用来处理返回data
function transformResponseData(res: AxiosResponse): any {
  res.data = transformResponse(res.data)
  return res
}
