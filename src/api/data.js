import axios from './index'

export const getTableData = () => {
  return axios.request({
    url: '/getTableData',
    methods: 'get'
  })
}

export const getFolderList = () => {
  return axios.request({
    url: '/getFolderList',
    method: 'get'
  })
}

export const getFileList = () => {
  return axios.request({
    url: '/getFileList',
    method: 'get'
  })
}

// 上传下载文件相关
export const getFilesList = () => {
  return axios.request({
    url: 'get_file_list',
    params: {
      userId: 1
    },
    method: 'get'
  })
}

export const getFile = ({ key, type }) => {
  return axios.request({
    url: 'get_file',
    data: {
      key,
      type
    },
    method: 'post'
  })
}

export const deleteFile = key => {
  return axios.request({
    url: 'delete_file',
    data: {
      key
    },
    method: 'delete'
  })
}
