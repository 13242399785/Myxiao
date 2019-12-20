//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    headerImg:'https://cdn.myfans.cc/177363_0_ly4zt3ivsa.jpg',
    userInfos: {
      imgUrl:'https://cdn.myfans.cc/177363_0_me25rmzcy8.jpg?imageView2/1/w/132/h/132',
      name:'  魔法少女和精神小伙的日常'
    },
    userInfo:{},
    currentId:1,
    navList: [{ name: '全部', typeId: 1 }, { name: '活跃', typeId:2}],//nav列表
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    selected: 0,
    color: "#444",
    selectedColor: "#444",
    activea: 'activea',
    list: [{
      iconClass: 'icon-shezhi',
      pagePath: "pages/index/index",
      text: "刷新"
    }, {
      iconClass: 'icon-add-fill boxShow',
      pagePath: "pages/logs/logs",
      text: "发布"
    }, {
      // iconClass: 'icon-guanzhu',
      pagePath: "pages/tab-bar/tab-bar",
      text: "我的"
    }],
    // swiper
    backgroundList:[
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300' },
      { img: 'https://cdn.myfans.cc/177363_0_kd7l30hbyk.jpg?imageView2/1/w/1200/h/300' },
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300' },
      { img:'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300'},
    ],
    backgroundList1: [
      { img: 'https://cdn.myfans.cc/177363_0_auw9bcycbh.jpg?imageView2/1/w/1200/h/300',title:'晒出圣诞气氛',url:'' },
      { img: 'https://cdn.myfans.cc/177363_0_kd7l30hbyk.jpg?imageView2/1/w/1200/h/300',title:'上班了吗',url:''},
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  switchTab(e) {
    const data = e.currentTarget.dataset
    const url = '../' + data.path;
    wx.navigateTo({
      url: '../' + url
    })
    this.setData({
      selected: data.index
    })
  },
  //点击导航事件
  handleTap: function (e) {
    let id = e.currentTarget.id;
    if (id) {
      this.setData({
        currentId: id
      })
    }
  },
})
