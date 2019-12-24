// 公共函数
export default {
  // 获取浏览器地址栏参数值
  getUrlParam(name) {
    let reg = new RegExp('^(^|&)'+name+'=([^&]*)')
    let r = window.location.search.substr(1).match(reg)
    if(r !== null) {
      return decodeURIComponent(r[2])
    }
  },
  // 分享函数
  initShareInfo(wx) {
    let shareInfo = {
      title: '故里分享', // 分享标题
      desc: '滴滴滴滴', // 分享描述
      link: 'www.hongshanit.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: '', // 分享图标
    }

    // 分享到朋友圈
    wx.onMenuShareTimeline(shareInfo)
    // “分享给朋友”
    wx.onMenuShareAppMessage(shareInfo)
    // “分享到QQ”
    wx.onMenuShareQQ(shareInfo)
    // “分享到QQ空间”
    wx.onMenuShareQZone(shareInfo)

    // “分享到朋友圈”及“分享到QQ空间”按钮的分享内容
    // wx.updateTimelineShareData(shareInfo)
    // “分享给朋友”及“分享到QQ”按钮的分享内容
    // wx.updateAppMessageShareData(shareInfo)
  }
}