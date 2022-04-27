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
