import React from 'react'
import Click from './Click'
import Text from './Text'
import Calc from './Calc'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Text title='Welcome to My First React App' text='Clicker' />
        <Click count={0} />
        <Text text='Calculator' title=''/>
        <Calc operation={''}/>
      </div>
    )
  }
}