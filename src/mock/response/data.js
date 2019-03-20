import { doCustomTimes } from '@/lib/tools'
import Mock from 'mockjs'
// const Random = Mock.Random

export const getTableData = () => {
  const template = {
    name: '@name',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

/**
 * getFileList
 * 得到文件列表
 */
export const getFileList = () => {
  const template = {
    'name|5': '@cword',
    'creat_time': '@datetime',
    'folder_id|1-5': 0,
    'id|+1': 10000
  }
  let arr = []
  doCustomTimes(10, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}

/**
 * getFolderList，分两次（两层结构）压入数组
 * folder_id是层次
 * 获得文件夹列表
 */
export const getFolderList = () => {
  const template1 = {
    'name|1': '@word',
    'creat_time': '@datetime',
    'folder_id': 0,
    'id|+1': 1
  }
  const template2 = {
    'name|1': '@word',
    'creat_time': '@datetime',
    'folder_id|+1': 1,
    'id|+1': 4
  }
  let arr = []
  doCustomTimes(3, () => {
    arr.push(Mock.mock(template1))
  })
  doCustomTimes(2, () => {
    arr.push(Mock.mock(template2))
  })
  return arr
}
