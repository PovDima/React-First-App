import React from 'react'
import Click from './Click'
import Text from './Text'
class App extends React.Component {
  render() {
    return (
      <div>
        <Text/>
        <Click/>
        <Text title='Welcome to My Second React App' text='Clicker123'/>
      </div>

    )
  }
}

export default App