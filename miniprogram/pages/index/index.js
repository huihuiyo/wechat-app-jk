//index.js
const app = getApp()
const db = wx.cloud.database();
const mydb = db.collection('mydb');

Page({
  data: {
    dbValue: [],
  },
  
  onLoad: function() {
    mydb.get().then(res => {
      // console.log(res.data);
      this.setData({
        dbValue: res.data
      })
    })
  },

})
