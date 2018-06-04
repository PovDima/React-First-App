import React from 'react'
import Click from './Click'
import Text from './Text'
import Calc from './Calc'
import MouseTracker from './MouseTracker'
export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Text title='Welcome to My First React App'  />
        <MouseTracker/>
      </div>
    )
  }
}
