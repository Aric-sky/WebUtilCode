import axios from 'axios'
var qs = require('qs')

const Utils = {
  get (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: data,
        withCredentials: true
      })
      .then((response) => {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
        console.log(error)
      })
    })
  },
  post (url, data = {}, upload = false) {
    return new Promise((resolve, reject) => {
      axios.post(url, upload ? data : qs.stringify(data), {
        withCredentials: true,
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
      })
      .then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error)
        console.log(error)
      })
    })
  }

}

export default Utils
