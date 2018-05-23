import React from 'react'
import Click from './Click'
import Text from './Text'
import Calc from './Calc'
class App extends React.Component {
  render() {
    return (
      <div>
        <Calc/>
        <Text/>
        <Click/>
        <Text title='Welcome to My Second React App' text='Clicker123'/>
      </div>

    )
  }
}

export default App