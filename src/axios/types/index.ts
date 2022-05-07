// 常用请求
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
// axios config接口
export interface AxiosRequestConfig {
  url: string
  method?: string
  headers?: any
  data?: any
  params?: any
  responseType?: XMLHttpRequestResponseType
}
// axios response接口
export interface AxiosResponse {
  data: any // 服务端返回数据
  status: number // 状态码
  statusText: string // 状态消息
  headers: any // 响应头
  config: AxiosRequestConfig // 请求配置
  request: any // 请求的 XMLHttpRequest 对象实例
}
// axios promise接口 继承于 Promise<AxiosResponse> 泛型接口
export interface AxiosPromise extends Promise<AxiosResponse> {}
