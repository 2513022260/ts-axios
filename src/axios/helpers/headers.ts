import { isObject } from './util'

export function processHeaders(headers: any, data: any): any {
  // 规格属性名
  normalizeHeaderName(headers, 'Content-Type')
  // 1. 看data是否是普通对象
  if (isObject(data)) {
    // 2. 是否有"Content-Type"
    if (headers && !headers['Content-Type']) {
      // 3. 修改"Content-Type"
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}

// 处理下headers里面属性 规范属性名
export function normalizeHeaderName(
  headers: any,
  normalizedName: string
): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (
      name !== normalizedName &&
      name.toUpperCase() === normalizedName.toUpperCase()
    ) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

// 处理返回headers
export function parseHeaders(headers: string): any {
  // 创建一个干净的对象
  const res = Object.create(null)
  // 截取 \r\n
  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }

    res[key] = val
  })
  return res
}
