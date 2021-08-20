export default {
  pages: [
    'pages/index/index',
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#b4282d',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/img/tab-bar/home.png',
        selectedIconPath: './assets/img/tab-bar/home-active.png',
        text: '首页'
      },
      {
        pagePath: 'pages/about/index',
        iconPath: './assets/img/tab-bar/user.png',
        selectedIconPath: './assets/img/tab-bar/user-active.png',
        text: '关于'
      }
    ]
  }
}
