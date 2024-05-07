
Component({
  data: {
    selected: 1,
    color: "#7A7E83",
    selectedColor: "#31869B",
    fontWeight:'bold',
    "list": [
      {
        "current": 0,
        "pagePath": "/pages/test_page/test_page",
        "text": "首页",
        "iconPath": "/imgs/main_large.png",
        "selectedIconPath": "/imgs/main_large.png"
      },
      {
        "current": 1,
        "pagePath": "/pages/history_page/history_page",
        "text": "历史记录",
        "iconPath": "/imgs/history.png",
        "selectedIconPath": "/imgs/history.png"
      },
      {
        "current": 2,
        "pagePath": "/pages/settings_page/settings_page",
        "text": "设置",
        "iconPath": "/imgs/option.png",
        "selectedIconPath": "/imgs/option.png"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const idx = e.currentTarget.dataset.index
      const path = e.currentTarget.dataset.path
      this.setData({
        selected: idx,
      });
      wx.switchTab({
        url: path,
      });
    }
  },
    
})

