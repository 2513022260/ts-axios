import Axios from './core/Axios'
import { AxiosInstance } from './types'

function getAxios(): AxiosInstance {
  const context = new Axios()
  const axios = Axios.prototype.request.bind(context) as AxiosInstance

  axios.request = Axios.prototype.request.bind(context) as AxiosInstance
  axios.get = Axios.prototype.get.bind(context)
  axios.delete = Axios.prototype.delete.bind(context)
  axios.head = Axios.prototype.head.bind(context)
  axios.options = Axios.prototype.options.bind(context)
  axios.post = Axios.prototype.post.bind(context)
  axios.put = Axios.prototype.put.bind(context)
  axios.patch = Axios.prototype.patch.bind(context)

  return axios
}

const axios = getAxios()
export default axios
