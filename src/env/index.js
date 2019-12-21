const evnList = {
  dev: {
    baseURL: ''
  },
  test: {
    baseURL: ''
  },
  prod: {
    domain: '',
    baseURL: ''
  }
}
// 每次手工修改项目环境变量
let currentEnv = 'prod'

// 根据当前浏览器环境动态设置环境变量
let params = {
  'dev-m.51purse.com': 'dev',
  'test-m.51purse.com': 'test',
  'm.51purse.com': 'prod'
}
currentEnv = params[location.hostname]

export default evnList[currentEnv]