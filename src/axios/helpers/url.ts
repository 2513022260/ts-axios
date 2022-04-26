import { isDate, isObject } from './util'

// 16进制 ASCII
function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
// 不同params拼接到url并返回  127 处理url  3456处理params
export function buildURL(url: string, params?: any): string {
  // 1. 没有参数直接返回url
  if (!params) {
    return url
  }
  // 2. 如果url有hash标记，则返回原始url
  if (url.includes('#')) {
    const markIndex = url.indexOf('#')
    url = url.slice(0, markIndex)
  }
  // 处理参数params
  // 定义键值对数组，用于最后拼接url，将params中的键值对进行处理最终放入parts中
  // parts最后应该为['key=value', 'a=1', 'b=2', 'c=3', ...]
  const parts: string[] = []

  Object.keys(params).forEach(key => {
    const value = params[key]

    // 3. 值为null 或者 undefined 不做处理 直接返回
    if (value === null || typeof value === 'undefined') {
      return
    }
    // 4. 值为数组 则将该值赋给临时数组变量values，用于下面遍历处理
    let values: string[]
    // 数组 直接处理成foo[]=bar&foo[]=baz
    if (Array.isArray(value)) {
      // 是数组则赋值 key加上[]
      values = value
      key += '[]'
    } else {
      // 如果值不是数组，则强行将其变为数组
      values = [value]
    }
    // values处理成数组后，遍历组装 url
    values.forEach(val => {
      // 5. 时间 处理成 ISO 标准时间
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        // 6. 对象  处理成字符串
        val = JSON.stringify(val)
      }
      // 放入到parts中
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  // 处理 parts 用 '&' 拼接
  const serializedParams = parts.join('&')

  if (serializedParams) {
    // 7. 判断原始url中是否有已存在的参数，即判断是否有'?',
    // 如果有，则将处理后的键值对加'&'拼接在后面，
    // 如果没有，则将处理后的键值对加'?'拼接在后面
    url += (url.includes('?') ? '&' : '?') + serializedParams
  }

  return url
}
