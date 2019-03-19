import axios from './index'

export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    methods: 'get'
  })
}
