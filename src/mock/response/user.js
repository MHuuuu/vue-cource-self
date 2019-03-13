import Mock from 'mockjs'
export const getUserInfo = (options) => {
  // console.log(options);
  const template ={
    'str|2-4':'ppp',
    'name|5':'nb',
    'id|+1':11,
    // max / (min + max)=1/10几率为ture
    'bool|1-9':true,
    'reg':/[1-9][a-z]/,
    email:Mock.mock('@email')

  }
  return Mock.mock(template)
}
