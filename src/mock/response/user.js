import Mock from 'mockjs'
const Random = Mock.Random

export const getUserInfo = (options) => {
  // console.log(options);
  const template = {
    'str|2-4': 'ppp',
    'name|5': 'nb',
    'id|+1': 11,
    // max / (min + max)=1/10几率为ture
    'bool|1-9': true,
    'reg': /[1-9][a-z]/,
    email: Mock.mock('@email'),
    range: Random.range(3, 17, 3),
    date: Random.date('yyyy-MM-dd'),
    datetime: Random.datetime('yyyy-MM-dd hh:mm'),
    datenow: Random.now('hour', 'yyyy-MM-dd a hh:mm')
  }
  return Mock.mock(template)
}

export const login = () => {
  return {
    code: 200,
    data: {
      token: 'xxx'
    },
    mes: ''
  }
}

export const authorization = () => {
  return {
    code: 200,
    data: {
      token: 'xxx',
      rules: {
        page: {
          home: true,
          home_index: true,
          about: true,
          argu: true,
          count_to: true,
          menu_page: true,
          upload: true,
          form: false,
          folder_tree: true,
          table_page: true,
          render_page: true,
          split_pane: true,
          parent: true,
          child: true,
          named_view: true,
          store: true,
          main: true
        },
        component: {
          edit_button: true,
          publish_button: false
        }
      }
    },
    mes: ''
  }
}
