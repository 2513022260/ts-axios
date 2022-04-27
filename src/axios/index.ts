import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

export default function Axios (config: AxiosRequestConfig) {
  processCofing(config)
  xhr(config)
}

// 用来处理config
function processCofing (config: AxiosRequestConfig) {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
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
