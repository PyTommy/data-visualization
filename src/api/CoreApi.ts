import axios, { Axios, AxiosRequestConfig } from 'axios'

export abstract class CoreAPI {
  protected get: Axios['get']
  protected post: Axios['post']
  protected put: Axios['put']
  protected patch: Axios['patch']
  protected delete: Axios['delete']

  constructor(
    props: {
      axiosConfig?: AxiosRequestConfig<any>
    } = {},
  ) {
    const axiosInstance = axios.create(props.axiosConfig)
    this.get = axiosInstance.get
    this.post = axiosInstance.post
    this.put = axiosInstance.put
    this.patch = axiosInstance.patch
    this.delete = axiosInstance.delete
  }
}
