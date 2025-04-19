const app = getApp()

Page({
  data: {
    loading: true,
    routes: []
  },

  onLoad() {
    this.generateRoutes()
  },

  async generateRoutes() {
    try {
      // 这里需要调用后端API获取路线数据
      // 实际项目中需要替换为真实的API调用
      const mockRoutes = [
        {
          days: [
            {
              schedule: [
                { time: '09:00', location: '故宫博物院', dianpingUrl: 'dianping://shop/123456' },
                { time: '12:00', location: '全聚德烤鸭店', dianpingUrl: 'dianping://shop/789012' },
                { time: '14:00', location: '天坛公园', dianpingUrl: 'dianping://shop/345678' }
              ]
            }
          ]
        }
      ]

      this.setData({
        loading: false,
        routes: mockRoutes
      })
    } catch (error) {
      wx.showToast({
        title: '生成路线失败，请重试',
        icon: 'none'
      })
    }
  },

  navigateToDianping(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateToMiniProgram({
      appId: '大众点评小程序的appId',
      path: url,
      fail(err) {
        console.error('跳转失败：', err)
        wx.showToast({
          title: '跳转失败',
          icon: 'none'
        })
      }
    })
  },

  async getClothingAdvice(e) {
    const routeIndex = e.currentTarget.dataset.routeIndex
    try {
      // 调用deepseek API获取穿衣建议
      wx.showLoading({ title: '加载中' })
      // 实际项目中需要替换为真实的API调用
      const advice = "根据当地天气情况，建议携带轻便外套和舒适鞋子"
      wx.hideLoading()
      wx.showModal({
        title: '穿衣建议',
        content: advice,
        showCancel: false
      })
    } catch (error) {
      wx.hideLoading()
      wx.showToast({
        title: '获取建议失败',
        icon: 'none'
      })
    }
  },

  async getTicketAdvice(e) {
    const routeIndex = e.currentTarget.dataset.routeIndex
    try {
      // 调用deepseek API获取门票建议
      wx.showLoading({ title: '加载中' })
      // 实际项目中需要替换为真实的API调用
      const advice = "建议提前在官网预约门票，避免排队等待"
      wx.hideLoading()
      wx.showModal({
        title: '门票购买预约攻略',
        content: advice,
        showCancel: false
      })
    } catch (error) {
      wx.hideLoading()
      wx.showToast({
        title: '获取建议失败',
        icon: 'none'
      })
    }
  },

  async getPhotoAdvice(e) {
    const routeIndex = e.currentTarget.dataset.routeIndex
    try {
      // 调用deepseek API获取拍照建议
      wx.showLoading({ title: '加载中' })
      // 实际项目中需要替换为真实的API调用
      const advice = "建议在景点开放时间前到达，可以拍到更好的照片"
      wx.hideLoading()
      wx.showModal({
        title: '拍照点位建议',
        content: advice,
        showCancel: false
      })
    } catch (error) {
      wx.hideLoading()
      wx.showToast({
        title: '获取建议失败',
        icon: 'none'
      })
    }
  }
}) 