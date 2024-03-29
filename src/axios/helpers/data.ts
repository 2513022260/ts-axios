import { isObject } from "./util";

export function transformRequest (data: any) : any {
  if (isObject(data)) {
    return JSON.stringify(data)
  }
  return data
} 

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      // console.log(error)
    }
  }
  return data
}
