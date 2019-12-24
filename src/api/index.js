export default {
  // 微信重定向地址
  wechatRedirect: '/api/wechat/redirect?url=http://www.hongshanit.cn&scope=snsapi_userinfo',
  // 获取微信配置
  wechatConfig: '/api/wechat/jssdk', // wx sdk 配置信息
  getUserInfo: '/api/wechat/getUserInfo', // 获取用户信息
  payWallet: '/api/wechat/pay/payWallet' // 支付钱包
}