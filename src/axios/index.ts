import xhr from './xhr'
import { AxiosRequestConfig } from './types'

export default function Axios (config: AxiosRequestConfig) {
  xhr(config)
}
