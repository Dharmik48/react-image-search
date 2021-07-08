import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID LRjFqVvjZS3Ylhp1QlamR3ptK6cGE8F0ow_HAKmwyoo',
  },
})
