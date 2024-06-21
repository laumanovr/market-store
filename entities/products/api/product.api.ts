import axios from 'axios'

export class ProductApi {
  getAllProducts = () => {
    return axios({
      method: 'GET',
      url: '',
    })
      .then(response => response.data)
      .catch(err => Promise.reject(err))
  }
}
