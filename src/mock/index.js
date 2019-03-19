import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData } from './response/data'

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)

// Mock.mock(/\/getUserInfo/,{name:'zx'})

export default Mock
