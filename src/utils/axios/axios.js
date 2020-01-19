import axios from 'axios'

const baseURL = process.env.VUE_APP_OGAMED_URL;

export default axios.create({
  baseURL: baseURL
  // You can add your headers here
})
