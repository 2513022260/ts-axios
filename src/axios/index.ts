import xhr from './xhr'
import { AxiosRequestConfig } from './types'
import { buildURL } from './helpers/url'

export default function Axios (config: AxiosRequestConfig) {
  processCofing(config)
  xhr(config)
}

// 用来处理config
function processCofing (config: AxiosRequestConfig) {
  config.url = transformUrl(config)
}
// 用来处理url
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config

  return buildURL(url, params)
}
