import Mock from 'mockjs'
import {getUserInfo} from './response/user'

Mock.mock(/\/getUserInfo/,'post',getUserInfo)
// Mock.mock(/\/getUserInfo/,{name:'zx'})

export default Mock
