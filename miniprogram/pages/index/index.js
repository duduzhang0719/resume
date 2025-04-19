const app = getApp()

Page({
  data: {
    cities: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '西安', '南京', '重庆', '长沙', '青岛', '沈阳', '大连', '厦门', '苏州', '天津', '长春', '哈尔滨', '济南', '郑州', '昆明', '兰州', '西宁', '银川', '贵阳', '南宁', '海口', '呼和浩特', '乌鲁木齐', '拉萨'],
    timeOptions: ['周末（2天1晚）', '五一小长假（5天4晚）', '清明小长假（3天2晚）', '端午小长假（3天2晚）', '十一国庆长假（8天7晚）'],
    cityIndex: -1,
    timeIndex: -1,
    preferences: '',
    isValid: false
  },

  onCityChange(e) {
    this.setData({
      cityIndex: e.detail.value
    })
    this.checkValid()
  },

  onTimeChange(e) {
    this.setData({
      timeIndex: e.detail.value
    })
    this.checkValid()
  },

  onPreferenceInput(e) {
    this.setData({
      preferences: e.detail.value
    })
  },

  checkValid() {
    const isValid = this.data.cityIndex >= 0 && this.data.timeIndex >= 0
    this.setData({ isValid })
  },

  onSubmit() {
    if (!this.data.isValid) return

    // 保存用户选择到全局数据
    app.globalData.selectedCity = this.data.cities[this.data.cityIndex]
    app.globalData.selectedTime = this.data.timeOptions[this.data.timeIndex]
    app.globalData.preferences = this.data.preferences

    // 跳转到路线页面
    wx.navigateTo({
      url: '/pages/route/route'
    })
  }
}) 