import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    // 每次切换回 index 页面都会触发 componentDidMount 生命周期
    console.info('home mounted')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Index Page</Text>
      </View>
    )
  }
}
