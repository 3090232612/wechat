//index.js
//获取应用实例
const app = getApp()

// Page({
//   data: {
//     motto: '....',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
let timer;
Page({
  data:{
    count:0,
    url: ['images/shitou.png', 'images/jianzi.png', 'images/bu.png'],
    hand: 'images/shitou.png',
    isClear:false,
    gameResult:'----',
    winNum:0
  },
  onLoad(){   
    console.log(this);
     this.timer();
  },
  changeUrl:function(ev){   
    let winNum = this.data.winNum;
    console.log(typeof winNum)
    console.log(winNum++);
    let a=1;
    console.log(a++);
    var newSrc = ev.target.dataset.src;
    this.setData({ hand: newSrc});
    this.setData({
      isClear: true
    })
    console.log(this.data.isClear)
    clearInterval(timer);
    if (newSrc =='images/shitou.png'&&this.data.count==0){
      this.setData({ gameResult: '平局' });
    }
    if (newSrc == 'images/shitou.png' && this.data.count == 1) {
      this.setData({ gameResult: '运气好', winNum: winNum++ });
    }
    if (newSrc == 'images/shitou.png' && this.data.count == 2) {
      this.setData({ gameResult: '哈哈笨猪' });
    }

    if (newSrc == 'images/jianzi.png' && this.data.count == 0) {
      this.setData({ gameResult: '哈哈笨猪' });
    }
    if (newSrc == 'images/jianzi.png' && this.data.count == 1) {
      this.setData({ gameResult: '平局' });
    }
    if (newSrc == 'images/jianzi.png' && this.data.count == 2) {
      this.setData({ gameResult: '运气好', winNum:winNum++ });
    }

    if (newSrc == 'images/bu.png' && this.data.count == 0) {
      this.setData({ gameResult: '运气好', winNum:winNum++ });
    }
    if (newSrc == 'images/bu.png' && this.data.count == 1) {
      this.setData({ gameResult: '哈哈笨猪' });
    }
    if (newSrc == 'images/bu.png' && this.data.count == 2) {
      this.setData({ gameResult: '平局' });
    }


   // this.timer();
    console.log(this) 
    
  },
  timer:function(){
    debugger;
    let count = 0;
    let _this = this;
    clearInterval(timer);
    timer = setInterval(function () {
     
      _this.setData({
        count: count
      })
      count++;
      if (count == 3) {
        count = 0;
      }
    }, 200)
    console.log(_this.data.isClear);
    // if (_this.data.isClear) {
    //   console.log(1)
    //   clearInterval(timer);
    //   timer=null;
    //   console.log(timer);
    // }
    // console.log(this);

  },
  again:function(){
    this.timer()
  }
})


