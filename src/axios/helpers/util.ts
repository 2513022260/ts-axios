const toString = Object.prototype.toString

// 返回 val is Date 类型谓词
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
